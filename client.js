import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "tpilih89",
  dataset: "production",
  apiVersion: "2022-10-05",
  useCdn: false,
  token:
    "skvN5rmxfblIdeg7DkHYkoVhE9hONhDtD0FozWOJ8djVmpGwU4V2H2MHhPne2yYk98WUAOKsI2vCeEBLeTn6h9oND6qVt84NFnmwjHdbHMMbYvEl0AYHhbCrik7IKmuBD0krOJTqKuo4nSitDr74m7cDmNB9g9ZSxsZx7TvrfjFtArYRUlbA",
});

const build = imageUrlBuilder(client);

export const urlFor = (source) => build.image(source);
