// simpleMint.js - Simple NFT minting script for Ubuntu
// Usage: node simpleMint.js

import { Connection, Keypair, clusterApiUrl } from '@solana/web3.js';
import { Metaplex, keypairIdentity } from '@metaplex-foundation/js';
import fs from 'fs';

async function mintNFT() {
  console.log('🚀 Starting NFT Mint Process...\n');

  try {
    // 1. Load your wallet
    const walletPath = process.env.HOME + '/.config/solana/id.json';
    
    if (!fs.existsSync(walletPath)) {
      console.log('❌ Wallet not found! Create one with: solana-keygen new');
      return;
    }
    
    const secretKey = JSON.parse(fs.readFileSync(walletPath, 'utf8'));
    const wallet = Keypair.fromSecretKey(Uint8Array.from(secretKey));
    
    console.log('✅ Wallet loaded:', wallet.publicKey.toString());

    // 2. Connect to Solana
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    
    // Check balance
    const balance = await connection.getBalance(wallet.publicKey);
    console.log('💰 Balance:', balance / 1e9, 'SOL');
    
    if (balance === 0) {
      console.log('❌ No SOL! Run: solana airdrop 2');
      return;
    }

    // 3. Initialize Metaplex
    const metaplex = Metaplex.make(connection)
      .use(keypairIdentity(wallet))
    

    console.log('\n📝 Creating NFT metadata...');

    // 4. Create metadata (using external image URL for simplicity)
    const metadata = {
      name: "Ubuntu Test NFT",
      description: "NFT minted from Ubuntu terminal",
      image: "https://i.imgur.com/TMpendx.jpeg",
 // Replace with actual image
      attributes: [
        { trait_type: "Environment", value: "Ubuntu" },
        { trait_type: "Method", value: "CLI" }
      ],
      properties: {
        category: "image",
      }
    };

    console.log('📤 Uploading metadata to Arweave...');
    const { uri } = await metaplex.nfts().uploadMetadata(metadata);
    console.log('✅ Metadata URI:', uri);

    // 5. Mint the NFT
    console.log('\n⚡ Minting NFT...');
    const { nft } = await metaplex.nfts().create({
      uri,
      name: metadata.name,
      sellerFeeBasisPoints: 500, // 5% royalty
      symbol: 'UBUNTU',
      creators: [
        {
          address: wallet.publicKey,
          share: 100,
        },
      ],
    });

    console.log('\n🎉 SUCCESS! NFT Minted!\n');
    console.log('Mint Address:', nft.address.toString());
    console.log('Name:', nft.name);
    console.log('Symbol:', nft.symbol);
    console.log('\n🔗 View on Solscan:');
    console.log(`https://solscan.io/token/${nft.address.toString()}?cluster=devnet`);
    console.log('\n🔗 View on Explorer:');
    console.log(`https://explorer.solana.com/address/${nft.address.toString()}?cluster=devnet`);

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.error(error);
  }
}

mintNFT();