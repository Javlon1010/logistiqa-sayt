import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { useEffect, useMemo, useState } from 'react';
import { feature } from 'topojson-client';

const TOPO_JSON_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

export default function LocalGuidesMap() {
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
    <div className="rounded-[2rem] border border-slate/10 bg-white p-6 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-slate/70">United States</p>
        <p className="text-sm font-semibold text-slate">{activeName || 'Hover a state'}</p>
      </div>

      <div className="mt-4 overflow-hidden rounded-3xl bg-surface">
        <ComposableMap
          projection="geoAlbersUsa"
          style={{ width: '100%', height: 'auto' }}
          aria-label="United States map with states"
        >
          <Geographies geography={geoJson}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => setActiveName(geo.properties?.name || '')}
                  onMouseLeave={() => setActiveName('')}
                  style={{
                    default: {
                      fill: '#40586d',
                      stroke: '#ffffff',
                      strokeWidth: 1.5,
                      outline: 'none',
                    },
                    hover: {
                      fill: '#3B729F',
                      stroke: '#ffffff',
                      strokeWidth: 2,
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#3B729F',
                      stroke: '#ffffff',
                      strokeWidth: 2,
                      outline: 'none',
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
}
