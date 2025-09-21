import { useWalletUi } from '@wallet-ui/react'
import { createTransaction, getBase58Decoder, signAndSendTransactionMessageWithSigners } from 'gill'

export function useWalletTransactionSignAndSend() {
  const { client } = useWalletUi()

  return async (ix, signer) => {
    // Get fresh blockhash with confirmation
    const { value: latestBlockhash } = await client.rpc
      .getLatestBlockhash({ commitment: 'confirmed' })
      .send()

    const transaction = createTransaction({
      feePayer: signer,
      version: 0,
      latestBlockhash,
      instructions: Array.isArray(ix) ? ix : [ix],
    })

    try {
      const signature = await signAndSendTransactionMessageWithSigners(transaction)
      return getBase58Decoder().decode(signature)
    } catch (error) {
      console.error('Transaction failed:', error)
      throw error
    }
  }
}