import Image from "next/image";
import Spanch from './assets/spanch-bob.jpg';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Image
        src={Spanch}
        alt="Spanch"
        width={100}
        height={100} 
      />
    </>
    
  );
}
