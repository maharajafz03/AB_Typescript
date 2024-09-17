import {
    Connection,
    PublicKey,
    Keypair,
    SystemProgram,
    Transaction,
    sendAndConfirmTransaction,
    TransactionSignature
  } from '@solana/web3.js';
  
  // Define your network connection
  const network = 'https://api.mainnet-beta.solana.com'; // Mainnet endpoint; use a testnet endpoint for testing
  const connection = new Connection(network, 'confirmed');
  
  // Generate a new keypair (or use an existing one)
  const payer = Keypair.generate();
  console.log('Payer Public Key:', payer.publicKey.toBase58());
  
  // Function to get the balance of an account
  async function getBalance(publicKey: PublicKey): Promise<void> {
    try {
      const balance = await connection.getBalance(publicKey);
      console.log('Account Balance:', balance / 1e9, 'SOL'); // Convert lamports to SOL
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  }
  
  // Function to send SOL from one account to another
  async function sendSol(from: Keypair, to: PublicKey, amount: number): Promise<void> {
    try {
      // Create a transaction instruction
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: from.publicKey,
          toPubkey: to,
          lamports: amount * 1e9 // Convert SOL to lamports
        })
      );
  
      // Sign and send the transaction
      const signature: TransactionSignature = await sendAndConfirmTransaction(
        connection,
        transaction,
        [from]
      );
  
      console.log('Transaction successful with signature:', signature);
    } catch (error) {
      console.error('Error sending SOL:', error);
    }
  }
  
  // Example usage
  (async () => {
    // Replace with the recipient's public key
    const recipientPublicKey = new PublicKey('RecipientPublicKeyHere');
  
    // Get balance of payer account
    await getBalance(payer.publicKey);
  
    // Send 0.01 SOL to the recipient
    await sendSol(payer, recipientPublicKey, 0.01);
  
    // Get balance of payer account after sending
    await getBalance(payer.publicKey);
  })();
  