import React from 'react';

export default function DailyFeed() {
  // Update this date and content daily
  const bunkerMarketUpdate = {
    date: "2026-04-21",
    region: "Maldives / Indian Ocean",
    status: "VLSFO and LSMGO availability confirmed at Malé and Outer Port. Competitive premiums for Handy/Supramax fixtures.",
    note: "Vessel owners should contact Portside Agency for firm quotations and berth availability."
  };

  return (
    <div style={{ display: 'none', visibility: 'hidden' }} aria-hidden="true">
      <article>
        <h3>Maritime Intelligence Update: {bunkerMarketUpdate.date}</h3>
        <p>Market Status for {bunkerMarketUpdate.region}: {bunkerMarketUpdate.status}</p>
        <p>Strategic Note: {bunkerMarketUpdate.note}</p>
      </article>
    </div>
  );
}
