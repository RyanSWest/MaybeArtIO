import {
  getAssociatedTokenAddress,
} from '@solana/spl-token';
import { PublicKey } from '@solana/web3.js';

async function example(userPublicKeyString) {
  // Replace with the actual token mint address
const tokenMintAddress = new PublicKey('NQ2N2fdG2xUmBbLyUdUd5hL9MSUcKgjTMBCN41p4tnk');
  
  // Use the user's public key (ensure this is a valid key)
  const userPublicKey = new PublicKey(userPublicKeyString);
  
  try {
    const associatedTokenAddress = await getAssociatedTokenAddress(
      tokenMintAddress,
      userPublicKey
    );
    console.log("Associated Token Address:", associatedTokenAddress.toBase58());
  } catch (error) {
    console.error("Error getting associated token address:", error);
  }
}

// Example usage
example('USER_PUBLIC_KEY_STRING');
