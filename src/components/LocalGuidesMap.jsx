import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { useEffect, useMemo, useState } from 'react';
import { feature } from 'topojson-client';

const TOPO_JSON_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

export default function LocalGuidesMap({ selectedState, onStateClick }) {
  const [topology, setTopology] = useState(null);
  const [error, setError] = useState(null);
  const [activeName, setActiveName] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(TOPO_JSON_URL);
        if (!res.ok) {
          throw new Error(`Failed to load map data (${res.status})`);
        }
        const json = await res.json();
        if (!cancelled) setTopology(json);
      } catch (err) {
        if (!cancelled) setError(err);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const geoJson = useMemo(() => {
    if (!topology?.objects?.states) return null;
    return feature(topology, topology.objects.states);
  }, [topology]);

  if (error) {
    return (
      <div className="rounded-[2rem] border border-slate/10 bg-white p-8 text-sm text-slate/80 shadow-soft">
        Unable to load the map.
      </div>
    );
  }

  if (!geoJson) {
    return (
      <div className="rounded-[2rem] border border-slate/10 bg-white p-8 text-sm text-slate/80 shadow-soft">
        Loading map...
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-sky-100 via-slate-100 to-white p-6 shadow-soft">
      <div className="grid gap-8 lg:grid-cols-[1.6fr_0.9fr] lg:items-start">
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.28em] text-slate/60">Sherpa Auto Transport Local Guides</p>
            <h2 className="text-3xl font-semibold text-slate">Explore service coverage across the United States</h2>
            <p className="max-w-2xl text-sm leading-7 text-slate/70">
              Hover over any state to see where our local guides are available and learn more about coverage.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white/90 p-5 text-slate shadow-soft">
              <p className="text-sm uppercase tracking-[0.24em] text-slate/60">Active state</p>
              <p className="mt-2 text-lg font-semibold text-slate">{activeName || 'Hover a state'}</p>
            </div>
            <div className="rounded-3xl bg-white/90 p-5 text-slate shadow-soft">
              <p className="text-sm uppercase tracking-[0.24em] text-slate/60">Service area</p>
              <p className="mt-2 text-lg font-semibold text-slate">United States coverage</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-[2rem] bg-slate-950/95 p-6 text-white shadow-soft">
          <button className="btn-primary w-full bg-slate-900 text-white hover:bg-slate-800">
            Get a Free Quote
          </button>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-5 text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-200">Call us</p>
            <p className="mt-2 text-xl font-semibold">877-650-1231</p>
          </div>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-[2rem] bg-slate-950 p-4">
        <div className="h-[520px] w-full">
          <ComposableMap
            projection="geoAlbersUsa"
            width={980}
            height={520}
            className="h-full w-full"
            aria-label="United States map with states"
          >
            <Geographies geography={geoJson}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const stateName = geo.properties?.name || '';
                  const isSelected = stateName === selectedState;
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => setActiveName(stateName)}
                      onMouseLeave={() => setActiveName('')}
                      onClick={() => onStateClick && onStateClick(stateName)}
                      style={{
                        default: {
                          fill: isSelected ? '#ff0000' : '#1D4ED8',
                          stroke: '#ffffff',
                          strokeWidth: 1,
                          outline: 'none',
                        },
                        hover: {
                          fill: '#0EA5E9',
                          stroke: '#ffffff',
                          strokeWidth: 1.5,
                          outline: 'none',
                        },
                        pressed: {
                          fill: '#0EA5E9',
                          stroke: '#ffffff',
                          strokeWidth: 1.5,
                          outline: 'none',
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </div>
      </div>
    </div>
  );
}
