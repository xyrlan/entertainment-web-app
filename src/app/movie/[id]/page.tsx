"use client"
import { Metadata, ResolvingMetadata } from 'next';
import { fetchItemDetails } from '@/infra/tmdb';
import { useEffect, useState } from 'react';
import ItemDetail from '@/components/itemsDetail';

export default function Page({ params }: { params: any }) {
  console.log(params)
  const [item, setItem] = useState<{
        title: any;
        poster: string;
        length: any;
        language: any;
        year: any;
        synopsis: any;
        rating: any;
        genres: any;
        tagline: any;
        status: any;
        cast: any;
    } | null>(null)

  useEffect(() => {
    async function fetchItem () {
      console.log('olaolaolaola')
      console.log(params)
      const item = await fetchItemDetails(params.id, 'Movie');
      setItem(item)
    }
    fetchItem()
  }, []);

  console.log(item)
  return (
    <div>
      <head>
        <title>{item !== null && item !== undefined ? 'M&S - ' + item.title : 'M&S - Home'}</title>
      </head>
      {
        item !== null && item !== undefined ? <ItemDetail item={item}/> : <div>Loading</div>
      }
    </div>
  );
}

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata,
  ): Promise<any> {
  // read route params
  return { props: {} };
}
