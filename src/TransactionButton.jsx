import React, { useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletTransactionSignAndSend } from './useTransactionSignandSend'
import { SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js'

export default function TransactionButton() {
  const { publicKey, connected } = useWallet()
  const sendTransaction = useWalletTransactionSignAndSend()
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    if (!connected || !publicKey) return

    setLoading(true)
    try {
      const instruction = SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: publicKey,
        lamports: 0.01 * LAMPORTS_PER_SOL,
      })

      await sendTransaction(instruction, publicKey)
    } catch (error) {
      console.error('Transaction failed:', error)
    } finally {
      setLoading(false)
    }
  }

  if (!connected) return null

  return (
    <button
      onClick={handleSend}
      disabled={loading}
      className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white text-sm px-3 py-1.5 rounded transition-colors"
    >
      {loading ? '⏳' : '💸 Send'}
    </button>
  )
}