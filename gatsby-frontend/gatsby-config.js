module.exports = {
  plugins: ["gatsby-plugin-typescript"],
  plugins: [`gatsby-plugin-material-ui`],
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "serverlesstodoappawscdkstac-todoappbucket1908a5c1-1506eqabxebfu",
        region: "us-east-2"
      },
    },
  ]
};
