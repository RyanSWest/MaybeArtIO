import { useWalletUi } from '@wallet-ui/react'
import  { Instruction, TransactionSendingSigner } from 'gill'
import { createTransaction, getBase58Decoder, signAndSendTransactionMessageWithSigners } from 'gill'

export function useWalletTransactionSignAndSend() {
  const { client } = useWalletUi()

  return async (ix, signer) => {
    const { value: latestBlockhash } = await client.rpc.getLatestBlockhash().send()

    const transaction = createTransaction({
      feePayer: signer,
      version: 0,
      latestBlockhash,
      instructions: Array.isArray(ix) ? ix : [ix],
    })

    const signature = await signAndSendTransactionMessageWithSigners(transaction)

    return getBase58Decoder().decode(signature)
  }
}
