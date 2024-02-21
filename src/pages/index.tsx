import Head from 'next/head';
import Input from '../components/atoms/Input/Input';
export default function Home() {
  const testChange = () => {
    console.log('ds');
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Input
          onChange={testChange}
          fontSize="2rem"
          placeholder={'테스트입니당'}
          borderRadius="1rem"
        ></Input>
      </Head>

      <div>테스트 잘 보이시나요?</div>
    </>
  );
}
