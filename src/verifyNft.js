// verifyNFT.js - Run this script to verify your minted NFT
// Usage: node verifyNFT.js <MINT_ADDRESS>

import { Connection, PublicKey } from '@solana/web3.js';
import { Metaplex } from '@metaplex-foundation/js';

const DEVNET_RPC = 'https://api.devnet.solana.com';

async function verifyNFT(mintAddress) {
  console.log('\n🔍 Starting NFT Verification...\n');
  
  try {
    // Connect to Solana
    const connection = new Connection(DEVNET_RPC, 'confirmed');
    const metaplex = Metaplex.make(connection);
    
    const mint = new PublicKey(mintAddress);
    
    console.log('✅ Step 1: Checking if mint account exists...');
    const accountInfo = await connection.getAccountInfo(mint);
    
    if (!accountInfo) {
      console.log('❌ Mint account does not exist!');
      return false;
    }
    console.log('   ✓ Mint account found');
    
    console.log('\n✅ Step 2: Fetching NFT metadata...');
    const nft = await metaplex.nfts().findByMint({ mintAddress: mint });
    
    console.log('   ✓ NFT metadata retrieved');
    
    console.log('\n✅ Step 3: Verifying NFT details...');
    console.log('   Name:', nft.name);
    console.log('   Symbol:', nft.symbol);
    console.log('   Mint:', nft.address.toString());
    console.log('   Update Authority:', nft.updateAuthorityAddress.toString());
    console.log('   Royalty:', (nft.sellerFeeBasisPoints / 100) + '%');
    console.log('   Is Mutable:', nft.isMutable);
    
    console.log('\n✅ Step 4: Checking metadata URI...');
    console.log('   Metadata URI:', nft.uri);
    
    if (nft.json) {
      console.log('\n✅ Step 5: Metadata JSON content:');
      console.log('   Description:', nft.json.description || 'N/A');
      console.log('   Image:', nft.json.image || 'N/A');
      
      if (nft.json.attributes && nft.json.attributes.length > 0) {
        console.log('   Attributes:');
        nft.json.attributes.forEach(attr => {
          console.log(`     - ${attr.trait_type}: ${attr.value}`);
        });
      }
      
      if (nft.json.properties) {
        console.log('   Files:', nft.json.properties.files?.length || 0);
        console.log('   Category:', nft.json.properties.category || 'N/A');
      }
    }
    
    console.log('\n✅ Step 6: Checking creators...');
    if (nft.creators && nft.creators.length > 0) {
      nft.creators.forEach((creator, i) => {
        console.log(`   Creator ${i + 1}:`, creator.address.toString());
        console.log(`     Verified: ${creator.verified}`);
        console.log(`     Share: ${creator.share}%`);
      });
    }
    
    console.log('\n✅ Step 7: Checking token account...');
    const owner = nft.mint.mintAuthorityAddress;
    console.log('   Mint Authority:', owner?.toString() || 'None (burned)');
    
    console.log('\n🎉 VERIFICATION COMPLETE!\n');
    console.log('View on Solscan:');
    console.log(`https://solscan.io/token/${mintAddress}?cluster=devnet`);
    console.log('\nView on Explorer:');
    console.log(`https://explorer.solana.com/address/${mintAddress}?cluster=devnet`);
    
    return true;
    
  } catch (error) {
    console.error('\n❌ Verification failed:', error.message);
    console.error('Full error:', error);
    return false;
  }
}

// Run verification
const mintAddress = process.argv[2] || 'HQZUirz33eLopphqaRCnXKrcMBBELD4StTCBjJZs6GF4';

if (!mintAddress) {
  console.log('Usage: node verifyNFT.js <MINT_ADDRESS>');
  process.exit(1);
}

verifyNFT(mintAddress);