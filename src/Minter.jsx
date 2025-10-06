// import React, { useState, useEffect } from 'react';
// import { useConnection, useWallet } from '@solana/wallet-adapter-react';
// import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
// import { 
//   Metaplex, 
// //   bundlrStorage,
//   toMetaplexFile
// } from '@metaplex-foundation/js';

// const GalleryNFTMinter = () => {
//   const { connection } = useConnection();
//   const { publicKey } = useWallet();
//   const [userEmail, setUserEmail] = useState('');
//   const [gallery, setGallery] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [showMintModal, setShowMintModal] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [nftData, setNftData] = useState({
//     name: '',
//     description: '',
//     attributes: []
//   });

//   const API_URL = 'http://localhost:3000';

//   // Initialize Metaplex
//   const metaplex = Metaplex.make(connection)
//     .use(bundlrStorage({
//       address: 'https://devnet.bundlr.network',
//       providerUrl: 'https://api.devnet.solana.com',
//       timeout: 60000,
//     }));

//   // Load user gallery
//   const loadGallery = async () => {
//     if (!userEmail) return;
    
//     try {
//       const response = await fetch(`${API_URL}/api/gallery/${userEmail}`);
//       const data = await response.json();
      
//       if (data.status === 'ok') {
//         setGallery(data.gallery || []);
//       }
//     } catch (error) {
//       console.error('Error loading gallery:', error);
//       setMessage('Error loading gallery');
//     }
//   };

//   const handleImageSelect = (image) => {
//     setSelectedImage(image);
//     setNftData({
//       name: image.title || 'Untitled NFT',
//       description: image.description || '',
//       attributes: []
//     });
//     setShowMintModal(true);
//   };

//   const addAttribute = () => {
//     setNftData(prev => ({
//       ...prev,
//       attributes: [...prev.attributes, { trait_type: '', value: '' }]
//     }));
//   };

//   const updateAttribute = (index, field, value) => {
//     setNftData(prev => ({
//       ...prev,
//       attributes: prev.attributes.map((attr, i) => 
//         i === index ? { ...attr, [field]: value } : attr
//       )
//     }));
//   };

//   const removeAttribute = (index) => {
//     setNftData(prev => ({
//       ...prev,
//       attributes: prev.attributes.filter((_, i) => i !== index)
//     }));
//   };

//   const getImageUrl = (image) => {
//     if (image.type === 'url') {
//       return image.url;
//     } else {
//       return `${API_URL}/uploads/${image.filename}`;
//     }
//   };

//   const mintNFT = async () => {
//     if (!publicKey || !selectedImage || !nftData.name) {
//       setMessage('Please connect wallet and fill required fields');
//       return;
//     }

//     setLoading(true);
//     try {
//       setMessage('Fetching image...');
      
//       // Get image data
//       const imageUrl = getImageUrl(selectedImage);
//       const imageResponse = await fetch(imageUrl);
//       const imageBlob = await imageResponse.blob();
//       const imageBuffer = await imageBlob.arrayBuffer();
      
//       // Get file extension from URL or filename
//       const getFileExtension = () => {
//         if (selectedImage.type === 'url') {
//           return selectedImage.url.split('.').pop() || 'jpg';
//         } else {
//           return selectedImage.filename.split('.').pop() || 'jpg';
//         }
//       };
      
//       const extension = getFileExtension();
//       const imageFile = toMetaplexFile(
//         new Uint8Array(imageBuffer),
//         `nft.${extension}`
//       );

//       setMessage('Uploading image to Arweave...');
      
//       // Upload image to Arweave
//       const imageUri = await metaplex.storage().upload(imageFile);
      
//       setMessage('Creating metadata...');
      
//       // Create metadata
//       const metadata = {
//         name: nftData.name,
//         description: nftData.description,
//         image: imageUri,
//         attributes: nftData.attributes.filter(attr => attr.trait_type && attr.value),
//         properties: {
//           files: [
//             {
//               uri: imageUri,
//               type: imageBlob.type,
//             },
//           ],
//           category: 'image',
//         },
//         creators: [
//           {
//             address: publicKey.toString(),
//             verified: true,
//             share: 100,
//           },
//         ],
//       };

//       setMessage('Uploading metadata...');
      
//       // Upload metadata
//       const metadataUri = await metaplex.storage().uploadJson(metadata);
      
//       setMessage('Minting NFT...');
      
//       // Mint the NFT
//       const { nft } = await metaplex.nfts().create({
//         uri: metadataUri,
//         name: nftData.name,
//         sellerFeeBasisPoints: 500, // 5% royalty
//         symbol: 'UNITY',
//         creators: [
//           {
//             address: publicKey,
//             verified: true,
//             share: 100,
//           },
//         ],
//         isMutable: false,
//       });

//       setMessage(`🎉 NFT Minted Successfully! 
//       Mint Address: ${nft.address.toString()}
      
//       View on Solscan: https://solscan.io/token/${nft.address.toString()}?cluster=devnet`);
      
//     } catch (error) {
//       console.error('Minting error:', error);
//       setMessage(`❌ Error: ${error.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     // <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-8">
//     <div className ='maybeArt-landing'>
//       <div className="max-w-6xl mx-auto p-6">
        
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-white mb-4">
//             🎨 Gallery NFT Minter
//           </h1>
//           <p className="text-gray-300 mb-6">
//             Select images from your gallery and mint them as NFTs on Solana
//           </p>
          
//           {/* Wallet Connection */}
//           <div className="mb-6">
//             <WalletMultiButton className="!bg-gradient-to-r !from-purple-600 !to-pink-600 !rounded-xl !font-semibold" />
//           </div>
//         </div>

//         {/* Email Input */}
//         <div className="mb-8 max-w-md mx-auto">
//           <div className="flex gap-3">
//             <input
//               type="email"
//               placeholder="Enter your email to load gallery"
//               value={userEmail}
//               onChange={(e) => setUserEmail(e.target.value)}
//               className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400"
//             />
//             <button
//               onClick={loadGallery}
//               className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
//             >
//               Load Gallery
//             </button>
//           </div>
//         </div>

//         {/* Gallery Grid */}
//         {gallery.length > 0 && (
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold text-white mb-6 text-center">
//               Your Gallery ({gallery.length} items)
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {gallery.map((image, index) => (
//                 <div 
//                   key={image.id || index}
//                   className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 hover:border-purple-400 transition-colors"
//                 >
//                   <div className="aspect-square mb-4 rounded-xl overflow-hidden">
//                     <img
//                       src={getImageUrl(image)}
//                       alt={image.title || 'Gallery item'}
//                       className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
//                     />
//                   </div>
                  
//                   <h3 className="text-white font-semibold mb-2 truncate">
//                     {image.title || 'Untitled'}
//                   </h3>
                  
//                   {image.description && (
//                     <p className="text-gray-300 text-sm mb-3 line-clamp-2">
//                       {image.description}
//                     </p>
//                   )}
                  
//                   <div className="flex justify-between items-center text-xs text-gray-400 mb-4">
//                     <span>{image.type === 'url' ? '🌐 URL' : '📁 File'}</span>
//                     <span>{new Date(image.createdAt).toLocaleDateString()}</span>
//                   </div>
                  
//                   <button
//                     onClick={() => handleImageSelect(image)}
//                     disabled={!publicKey}
//                     className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
//                   >
//                     {!publicKey ? 'Connect Wallet First' : '🚀 Mint as NFT'}
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Empty State */}
//         {userEmail && gallery.length === 0 && (
//           <div className="text-center text-gray-300">
//             <p className="text-xl mb-4">No images found in your gallery</p>
//             <p>Upload some images first to mint them as NFTs!</p>
//           </div>
//         )}

//         {/* Mint Modal */}
//         {showMintModal && selectedImage && (
//           <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
//             <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-md w-full border border-white/20 max-h-[90vh] overflow-y-auto">
              
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-white">Mint NFT</h2>
//                 <button
//                   onClick={() => setShowMintModal(false)}
//                   className="text-gray-400 hover:text-white text-2xl"
//                 >
//                   ✕
//                 </button>
//               </div>

//               {/* Preview Image */}
//               <div className="aspect-square mb-6 rounded-xl overflow-hidden">
//                 <img
//                   src={getImageUrl(selectedImage)}
//                   alt={selectedImage.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* NFT Details */}
//               <div className="space-y-4 mb-6">
//                 <div>
//                   <label className="block text-white font-semibold mb-2">
//                     NFT Name *
//                   </label>
//                   <input
//                     type="text"
//                     value={nftData.name}
//                     onChange={(e) => setNftData(prev => ({ ...prev, name: e.target.value }))}
//                     className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white focus:outline-none focus:border-purple-400"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-white font-semibold mb-2">
//                     Description
//                   </label>
//                   <textarea
//                     value={nftData.description}
//                     onChange={(e) => setNftData(prev => ({ ...prev, description: e.target.value }))}
//                     rows="3"
//                     className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white focus:outline-none focus:border-purple-400"
//                   />
//                 </div>

//                 {/* Attributes */}
//                 <div>
//                   <div className="flex justify-between items-center mb-3">
//                     <label className="text-white font-semibold">Attributes</label>
//                     <button
//                       type="button"
//                       onClick={addAttribute}
//                       className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
//                     >
//                       + Add
//                     </button>
//                   </div>
                  
//                   {nftData.attributes.map((attr, index) => (
//                     <div key={index} className="flex gap-2 mb-2">
//                       <input
//                         type="text"
//                         placeholder="Type"
//                         value={attr.trait_type}
//                         onChange={(e) => updateAttribute(index, 'trait_type', e.target.value)}
//                         className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/30 text-white text-sm focus:outline-none"
//                       />
//                       <input
//                         type="text"
//                         placeholder="Value"
//                         value={attr.value}
//                         onChange={(e) => updateAttribute(index, 'value', e.target.value)}
//                         className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/30 text-white text-sm focus:outline-none"
//                       />
//                       <button
//                         onClick={() => removeAttribute(index)}
//                         className="px-2 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
//                       >
//                         ✕
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Message */}
//               {message && (
//                 <div className={`p-4 rounded-xl mb-4 text-sm whitespace-pre-line ${
//                   message.includes('Error') || message.includes('❌')
//                     ? 'bg-red-500/20 border border-red-500/50 text-red-200'
//                     : message.includes('🎉')
//                     ? 'bg-green-500/20 border border-green-500/50 text-green-200'
//                     : 'bg-blue-500/20 border border-blue-500/50 text-blue-200'
//                 }`}>
//                   {message}
//                 </div>
//               )}

//               {/* Mint Button */}
//               <button
//                 onClick={mintNFT}
//                 disabled={loading || !nftData.name}
//                 className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
//               >
//                 {loading ? (
//                   <span className="flex items-center justify-center">
//                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                     Minting...
//                   </span>
//                 ) : (
//                   '🚀 Mint NFT'
//                 )}
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default GalleryNFTMinter;