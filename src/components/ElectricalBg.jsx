import './ElectricalBg.css';

/**
 * Rich background decorations for dark theme sections.
 * Renders large visible geometric shapes, glowing accents, grid patterns, and gradient meshes.
 *
 * @param {'yellow' | 'blue' | 'mixed'} variant
 * @param {boolean} dense — more elements
 */
export default function ElectricalBg({ variant = 'yellow', dense = false }) {
  const v = variant;

  return (
    <div className="ebg" aria-hidden="true">
      {/* Large gradient mesh blobs */}
      <div className={`ebg__blob ebg__blob--1 ebg__blob--${v}`} />
      <div className={`ebg__blob ebg__blob--2 ebg__blob--${v}`} />

      {/* Grid pattern overlay */}
      <div className="ebg__grid" />

      {/* Dot pattern area */}
      <div className="ebg__dots" />

      {/* Geometric shapes */}
      <div className={`ebg__shape ebg__shape--ring ebg__shape--ring-1 ebg__shape--${v}`} />
      <div className={`ebg__shape ebg__shape--ring ebg__shape--ring-2 ebg__shape--${v}`} />
      <div className={`ebg__shape ebg__shape--diamond ebg__shape--diamond-1 ebg__shape--${v}`} />
      <div className={`ebg__shape ebg__shape--cross ebg__shape--cross-1 ebg__shape--${v}`} />

      {/* Accent lines */}
      <div className={`ebg__line ebg__line--1 ebg__line--${v}`} />
      <div className={`ebg__line ebg__line--2 ebg__line--${v}`} />
      <div className={`ebg__line ebg__line--3 ebg__line--${v}`} />

      {/* Corner brackets */}
      <div className={`ebg__corner ebg__corner--tl ebg__corner--${v}`} />
      <div className={`ebg__corner ebg__corner--br ebg__corner--${v}`} />

      {/* Floating dots cluster */}
      <div className={`ebg__dotgroup ebg__dotgroup--1 ebg__dotgroup--${v}`} />
      <div className={`ebg__dotgroup ebg__dotgroup--2 ebg__dotgroup--${v}`} />

      {dense && (
        <>
          <div className={`ebg__shape ebg__shape--ring ebg__shape--ring-3 ebg__shape--${v}`} />
          <div className={`ebg__shape ebg__shape--hex ebg__shape--hex-1 ebg__shape--${v}`} />
          <div className={`ebg__line ebg__line--4 ebg__line--${v}`} />
          <div className={`ebg__dotgroup ebg__dotgroup--3 ebg__dotgroup--${v}`} />
          <div className={`ebg__shape ebg__shape--diamond ebg__shape--diamond-2 ebg__shape--${v}`} />
        </>
      )}
    </div>
  );
}
