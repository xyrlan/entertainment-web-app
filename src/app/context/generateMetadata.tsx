import { ResolvingMetadata } from "next";

export async function generateMetadata(
    { params, searchParams }: any,
    parent: ResolvingMetadata,
    ): Promise<any> {
    // read route params
    return { props: {} };
  }
  