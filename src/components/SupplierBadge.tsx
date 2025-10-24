'use client';

import { SupplierInfo } from '@/types/product';

interface SupplierBadgeProps {
  supplier: SupplierInfo;
  compact?: boolean;
}

export default function SupplierBadge({ supplier, compact = false }: SupplierBadgeProps) {
  const getVerificationColor = (level?: string) => {
    switch (level) {
      case 'gold':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'premium':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'basic':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getVerificationIcon = (level?: string) => {
    switch (level) {
      case 'gold':
        return '👑';
      case 'premium':
        return '⭐';
      case 'basic':
        return '✓';
      default:
        return '•';
    }
  };

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        {supplier.isVerified && (
          <span
            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getVerificationColor(
              supplier.verificationLevel
            )}`}
          >
            <span>{getVerificationIcon(supplier.verificationLevel)}</span>
            <span className="capitalize">{supplier.verificationLevel}</span>
          </span>
        )}
        {supplier.rating && (
          <span className="flex items-center gap-1 text-xs text-gray-600">
            <span className="text-yellow-500">★</span>
            <span>{supplier.rating.toFixed(1)}</span>
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
      {/* Supplier Name and Verification */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 mb-1">{supplier.name}</h4>
          {supplier.location && (
            <p className="text-xs text-gray-500">📍 {supplier.location}</p>
          )}
        </div>
        {supplier.isVerified && (
          <span
            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getVerificationColor(
              supplier.verificationLevel
            )}`}
          >
            <span>{getVerificationIcon(supplier.verificationLevel)}</span>
            <span className="capitalize">{supplier.verificationLevel}</span>
          </span>
        )}
      </div>

      {/* Rating */}
      {supplier.rating && (
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`text-lg ${
                  star <= Math.round(supplier.rating || 0)
                    ? 'text-yellow-500'
                    : 'text-gray-300'
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-600">{supplier.rating.toFixed(1)}</span>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        {supplier.totalTransactions && (
          <div className="text-xs">
            <span className="text-gray-500">Transactions:</span>
            <span className="font-semibold text-gray-900 ml-1">
              {supplier.totalTransactions.toLocaleString()}
            </span>
          </div>
        )}
        {supplier.responseRate && (
          <div className="text-xs">
            <span className="text-gray-500">Response:</span>
            <span className="font-semibold text-gray-900 ml-1">
              {supplier.responseRate}%
            </span>
          </div>
        )}
        {supplier.responseTime && (
          <div className="text-xs col-span-2">
            <span className="text-gray-500">Response time:</span>
            <span className="font-semibold text-gray-900 ml-1">
              {supplier.responseTime}
            </span>
          </div>
        )}
        {supplier.yearEstablished && (
          <div className="text-xs col-span-2">
            <span className="text-gray-500">Established:</span>
            <span className="font-semibold text-gray-900 ml-1">
              {supplier.yearEstablished}
            </span>
          </div>
        )}
      </div>

      {/* Badges */}
      {supplier.badges && supplier.badges.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {supplier.badges.map((badge, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-2 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-700"
              title={badge.description}
            >
              {badge.type === 'verified' && '✓'}
              {badge.type === 'top-seller' && '🏆'}
              {badge.type === 'fast-shipping' && '⚡'}
              {badge.type === 'quality-assured' && '✨'}
              {badge.type === 'new-supplier' && '🆕'}
              <span>{badge.label}</span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

