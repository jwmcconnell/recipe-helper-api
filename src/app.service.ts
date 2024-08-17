import { Injectable } from '@nestjs/common';
// import OpenAI from 'openai';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    // const client = new OpenAI({ apiKey: process.env['OPENAI_API_KEY'] });
    // const chatCompletion = await client.chat.completions.create({
    //   messages: [{ role: 'user', content: 'Say this is a test' }],
    //   model: 'gpt-4o-mini',
    // });
    // console.log(JSON.stringify(chatCompletion, null, 2));
    return 'Hello World!';
  }
}
