"use client";

type QuantityStepperProps = {
  value: number;
  onDecrease: () => void;
  onIncrease: () => void;
  min?: number;
  className?: string;
};

export default function QuantityStepper({
  value,
  onDecrease,
  onIncrease,
  min = 1,
  className = "",
}: QuantityStepperProps) {
  const isAtMin = value <= min;

  return (
    <div className={`inline-flex items-center overflow-hidden rounded-lg border border-primary-200 ${className}`.trim()}>
      <button
        type="button"
        onClick={onDecrease}
        disabled={isAtMin}
        aria-label="Decrease quantity"
        className="px-3 py-1.5 text-base text-gray-700 transition hover:bg-primary-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        -
      </button>
      <span className="min-w-12 border-x border-primary-200 px-3 py-1.5 text-center text-sm font-medium text-gray-900">
        {value}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        aria-label="Increase quantity"
        className="px-3 py-1.5 text-base text-gray-700 transition hover:bg-primary-50"
      >
        +
      </button>
    </div>
  );
}
