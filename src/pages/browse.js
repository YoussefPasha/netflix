import React from 'react';
import { useContent } from '../hooks';

export default function Browse() {
  const { series } = useContent('series');
  console.log(series);
  return (
    <div>
      <h1>Browse</h1>
    </div>
  );
}
