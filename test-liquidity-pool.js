import { Connection, Keypair, PublicKey, Transaction, sendAndConfirmTransaction } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID, getAssociatedTokenAddress, createAssociatedTokenAccountInstruction, getAccount, createMintToInstruction } from '@solana/spl-token';
import fs from 'fs';

async function testLiquidityPool() {
  console.log('🧪 Testing liquidity pool creation on devnet...\n');

  // Configuration - UPDATE THESE FOR YOUR TOKEN
  const TOKEN_MINT = new PublicKey('E5fqgV1UpossDXRND77XyzeJdg2Q8dkopT3poa1pHrS6'); // Your token mint
  const USDC_MINT = new PublicKey('4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU'); // USDC devnet
  const TOKEN_DECIMALS = 9; // Your token decimals
  const USDC_DECIMALS = 6;  // USDC decimals

  // Pool amounts - Small test amounts
  const TOKEN_AMOUNT = 1000000; // 1 token (with 9 decimals)
  const USDC_AMOUNT = 1000000;  // 1 USDC (with 6 decimals)

  // Load wallet
  const walletPath = process.env.HOME + '/.config/solana/id.json';
  if (!fs.existsSync(walletPath)) {
    console.log('❌ Wallet not found! Create with: solana-keygen new');
    return;
  }

  const secretKey = JSON.parse(fs.readFileSync(walletPath, 'utf8'));
  const wallet = Keypair.fromSecretKey(Uint8Array.from(secretKey));

  console.log('Wallet:', wallet.publicKey.toString());

  // Connect to devnet for testing
  const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

  try {
    // Check SOL balance
    const balance = await connection.getBalance(wallet.publicKey);
    console.log('SOL Balance:', balance / 1e9, 'SOL');

    if (balance < 1000000) { // 0.001 SOL
      console.log('❌ Need at least 0.001 SOL for testing');
      console.log('Get devnet SOL: solana airdrop 1');
      return;
    }

    // Check token balances
    console.log('\n📊 Checking token balances...');

    const tokenATA = await getAssociatedTokenAddress(TOKEN_MINT, wallet.publicKey);
    const usdcATA = await getAssociatedTokenAddress(USDC_MINT, wallet.publicKey);

    let tokenBalance = 0;
    let usdcBalance = 0;

    try {
      const tokenAccount = await getAccount(connection, tokenATA);
      tokenBalance = Number(tokenAccount.amount);
      console.log('Your Token Balance:', tokenBalance / (10 ** TOKEN_DECIMALS));
    } catch {
      console.log('❌ No token account found - need tokens first');
      return;
    }

    try {
      const usdcAccount = await getAccount(connection, usdcATA);
      usdcBalance = Number(usdcAccount.amount);
      console.log('USDC Balance:', usdcBalance / (10 ** USDC_DECIMALS));
    } catch {
      console.log('❌ No USDC account found - need USDC first');
      return;
    }

    // Check if we have enough tokens
    if (tokenBalance < TOKEN_AMOUNT) {
      console.log(`❌ Insufficient token balance. Need ${TOKEN_AMOUNT / (10 ** TOKEN_DECIMALS)}, have ${tokenBalance / (10 ** TOKEN_DECIMALS)}`);
      return;
    }

    if (usdcBalance < USDC_AMOUNT) {
      console.log(`❌ Insufficient USDC balance. Need ${USDC_AMOUNT / (10 ** USDC_DECIMALS)}, have ${usdcBalance / (10 ** USDC_DECIMALS)}`);
      return;
    }

    console.log('\n✅ Balances sufficient for test pool creation!');
    console.log('\n📋 Pool Configuration:');
    console.log('- Token:', TOKEN_MINT.toString());
    console.log('- USDC:', USDC_MINT.toString());
    console.log('- Token Amount:', TOKEN_AMOUNT / (10 ** TOKEN_DECIMALS));
    console.log('- USDC Amount:', USDC_AMOUNT / (10 ** USDC_DECIMALS));
    console.log('- Initial Price: $', (USDC_AMOUNT / (10 ** USDC_DECIMALS)) / (TOKEN_AMOUNT / (10 ** TOKEN_DECIMALS)), 'per token');

    console.log('\n🚀 Ready to create pool!');
    console.log('Next steps:');
    console.log('1. Use Raydium UI: https://raydium.io/liquidity/');
    console.log('2. Or use the CLI script with these amounts');
    console.log('3. Test small amounts first');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testLiquidityPool();