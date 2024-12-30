import { writeFile } from 'fs/promises';

export async function decodeBase64ToImage(
  base64String: string,
  outputPath: string,
): Promise<void> {
  try {
    const base64Data = base64String.includes('base64,')
      ? base64String.split('base64,')[1]
      : base64String;

    const imageBuffer = Buffer.from(base64Data, 'base64');

    await writeFile(outputPath, imageBuffer);

    console.log(`Imagem salva com sucesso em: ${outputPath}`);
  } catch (error) {
    console.error('Erro ao salvar a imagem:', error.message);
    throw new Error('Falha ao decodificar e salvar a imagem');
  }
}
