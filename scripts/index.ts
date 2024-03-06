import { ethers } from 'ethers';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const networkUrl = `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_API_KEY}`;
const provider = new ethers.JsonRpcProvider(networkUrl);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY as string, provider);
const host = 'http://localhost:3300/api/v1';
const email = 'luffy@mailinator.com';

async function main() {
  try {
    const signData = await axios.post(`${host}/signature`, { email });
    const { types, domain, message } = signData?.data;
    console.log({ types, domain, message });

    const signature = await signer.signTypedData(domain, types, message);
    console.log({ signature });
    const verification = await axios.post(`${host}/verification`, {
      email,
      signature,
    });

    console.log(verification?.data);
  } catch (error) {
    console.error(error);
  }
}

main();
