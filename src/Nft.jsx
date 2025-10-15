import React, { useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { 
  Metaplex, 
  keypairIdentity, 
//   bundlrStorage,
  toMetaplexFile
} from '@metaplex-foundation/js';
import { PublicKey } from '@solana/web3.js';

const NFTMinter = () => {
  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [nftData, setNftData] = useState({
    name: '',
    description: '',
    image: null,
    attributes: []
  });

  // Initialize Metaplex
  const metaplex = Metaplex.make(connection)
    .use(bundlrStorage({
      address: 'https://devnet.bundlr.network',
      providerUrl: 'https://api.devnet.solana.com',
      timeout: 60000,
    }));

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNftData(prev => ({ ...prev, image: file }));
      setMessage(`Selected: ${file.name}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNftData(prev => ({ ...prev, [name]: value }));
  };

  const addAttribute = () => {
    setNftData(prev => ({
      ...prev,
      attributes: [...prev.attributes, { trait_type: '', value: '' }]
    }));
  };

  const updateAttribute = (index, field, value) => {
    setNftData(prev => ({
      ...prev,
      attributes: prev.attributes.map((attr, i) => 
        i === index ? { ...attr, [field]: value } : attr
      )
    }));
  };

  const removeAttribute = (index) => {
    setNftData(prev => ({
      ...prev,
      attributes: prev.attributes.filter((_, i) => i !== index)
    }));
  };

  const mintNFT = async () => {
    if (!publicKey || !nftData.image || !nftData.name) {
      setMessage('Please connect wallet and fill required fields');
      return;
    }

    setLoading(true);
    try {
      // Convert image to Metaplex file
      const imageBuffer = await nftData.image.arrayBuffer();
      const imageFile = toMetaplexFile(
        new Uint8Array(imageBuffer),
        nftData.image.name
      );

      setMessage('Uploading image to Arweave...');
      
      // Upload image to Arweave via Bundlr
      const imageUri = await metaplex.storage().upload(imageFile);
      
      setMessage('Creating metadata...');
      
      // Create metadata
      const metadata = {
        name: nftData.name,
        description: nftData.description,
        image: imageUri,
        attributes: nftData.attributes.filter(attr => attr.trait_type && attr.value),
        properties: {
          files: [
            {
              uri: imageUri,
              type: nftData.image.type,
            },
          ],
          category: 'image',
        },
        creators: [
          {
            address: publicKey.toString(),
            verified: true,
            share: 100,
          },
        ],
      };

      setMessage('Uploading metadata...');

      const verifyMintedNFT = async (mintAddress) => {
  try {
    setMessage('🔍 Verifying NFT...');
    
    const nft = await metaplex.nfts().findByMint({ 
      mintAddress: new PublicKey(mintAddress) 
    });
    
    console.log('✅ Verification Results:', {
      name: nft.name,
      symbol: nft.symbol,
      uri: nft.uri,
      royalty: nft.sellerFeeBasisPoints / 100 + '%',
      mutable: nft.isMutable
    });
    
    setMessage(`✅ Verified! View: https://solscan.io/token/${mintAddress}?cluster=devnet`);
    
  } catch (error) {
    setMessage(`⚠️ Verification error: ${error.message}`);
  }
};
      
      // Upload metadata
      const metadataUri = await metaplex.storage().uploadJson(metadata);
      
      setMessage('Minting NFT...');
      
      // Mint the NFT
      const { nft } = await metaplex.nfts().create({
        uri: metadataUri,
        name: nftData.name,
        sellerFeeBasisPoints: 500, // 5% royalty
        symbol: 'UNITY',
        creators: [
          {
            address: publicKey,
            verified: true,
            share: 100,
          },
        ],
        isMutable: false,
      });

      setMessage(`🎉 NFT Minted Successfully! Mint: ${nft.address.toString()}`);
      
      // Reset form
      setNftData({
        name: '',
        description: '',
        image: null,
        attributes: []
      });
      
    } catch (error) {
      console.error('Minting error:', error);
      setMessage(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-8">
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              🎨 Mint Your NFT
            </h1>
            <p className="text-gray-300">
              Create unique NFTs on Solana blockchain
            </p>
          </div>

          {/* Wallet Connection */}
          <div className="mb-8 flex justify-center">
            <WalletMultiButton className="!bg-gradient-to-r !from-purple-600 !to-pink-600 !rounded-xl !font-semibold" />
          </div>

          {!publicKey ? (
            <div className="text-center text-gray-300">
              Please connect your Solana wallet to continue
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* NFT Name */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  NFT Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={nftData.name}
                  onChange={handleInputChange}
                  placeholder="Enter NFT name"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={nftData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your NFT"
                  rows="3"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Image *
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-purple-600 file:text-white file:cursor-pointer"
                  required
                />
              </div>

              {/* Attributes */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-white font-semibold">Attributes</label>
                  <button
                    type="button"
                    onClick={addAttribute}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    + Add Trait
                  </button>
                </div>
                
                {nftData.attributes.map((attr, index) => (
                  <div key={index} className="flex gap-3 mb-3">
                    <input
                      type="text"
                      placeholder="Trait type (e.g. Color)"
                      value={attr.trait_type}
                      onChange={(e) => updateAttribute(index, 'trait_type', e.target.value)}
                      className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400"
                    />
                    <input
                      type="text"
                      placeholder="Value (e.g. Blue)"
                      value={attr.value}
                      onChange={(e) => updateAttribute(index, 'value', e.target.value)}
                      className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400"
                    />
                    <button
                      type="button"
                      onClick={() => removeAttribute(index)}
                      className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              {/* Message */}
              {message && (
                <div className={`p-4 rounded-xl ${
                  message.includes('Error') || message.includes('❌')
                    ? 'bg-red-500/20 border border-red-500/50 text-red-200'
                    : message.includes('🎉')
                    ? 'bg-green-500/20 border border-green-500/50 text-green-200'
                    : 'bg-blue-500/20 border border-blue-500/50 text-blue-200'
                }`}>
                  {message}
                </div>
              )}

              {/* Mint Button */}
              <button
                onClick={mintNFT}
                disabled={loading || !nftData.name || !nftData.image}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Minting NFT...
                  </span>
                ) : (
                  '🚀 Mint NFT'
                )}
              </button>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NFTMinter;