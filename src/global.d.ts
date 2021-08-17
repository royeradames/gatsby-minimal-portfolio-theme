// give ReactCompoenent SVGs a type of any so that typescript is satisfy
declare module "*.svg" {
  const content: any;
  export default content;
}