'use client';

import { useState, useRef, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ImageSearch() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!selectedImage) {
      setError('Please select an image first');
      return;
    }

    setIsSearching(true);
    setError(null);

    try {
      const formData = new FormData();
      
      // Convert base64 to blob
      const response = await fetch(selectedImage);
      const blob = await response.blob();
      formData.append('image', blob, 'search-image.jpg');

      const searchResponse = await fetch('/api/search/image', {
        method: 'POST',
        body: formData,
      });

      const data = await searchResponse.json();

      if (data.success && data.products.length > 0) {
        // Store results in sessionStorage for the results page
        sessionStorage.setItem('imageSearchResults', JSON.stringify(data));
        router.push('/products?search=image');
      } else {
        setError('No similar products found. Try another image.');
      }
    } catch (err) {
      console.error('Image search error:', err);
      setError('Failed to search. Please try again.');
    } finally {
      setIsSearching(false);
    }
  };

  const handleClearImage = () => {
    setSelectedImage(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          🔍 Search by Image
        </h3>
        <p className="text-sm text-gray-600">
          Upload an image to find similar products
        </p>
      </div>

      <form onSubmit={handleSearch}>
        {/* Image Upload Area */}
        <div className="mb-4">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/webp"
            onChange={handleImageSelect}
            className="hidden"
            id="image-upload"
          />
          
          {!selectedImage ? (
            <label
              htmlFor="image-upload"
              className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors bg-gray-50"
            >
              <div className="text-center">
                <div className="text-4xl mb-2">📷</div>
                <p className="text-sm font-medium text-gray-700">
                  Click to upload image
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  JPG, PNG, or WEBP (max 5MB)
                </p>
              </div>
            </label>
          ) : (
            <div className="relative">
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src={selectedImage}
                  alt="Selected for search"
                  fill
                  className="object-contain"
                />
              </div>
              <button
                type="button"
                onClick={handleClearImage}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {/* Search Button */}
        <button
          type="submit"
          disabled={!selectedImage || isSearching}
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSearching ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin">⌛</span>
              Searching...
            </span>
          ) : (
            'Search Similar Products'
          )}
        </button>
      </form>

      {/* Tips */}
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-xs text-blue-800">
          <strong>💡 Tips:</strong> For best results, use clear product photos with good lighting and minimal background.
        </p>
      </div>
    </div>
  );
}

