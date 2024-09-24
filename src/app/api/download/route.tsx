import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(request: Request) {
  const filePath = path.join(process.cwd(), 'public', 'cv/Ando-Raharimanana-CV.pdf');
  const fileName = 'Ando-Raharimanana-CV.pdf';

  // Check if the file exists
  try {
    const file = await fs.readFile(filePath);
    
    // Define a mapping of file extensions to content types
    const contentTypeMap: { [key: string]: string } = {
      pdf: 'application/pdf',
    };

    // Get the file extension
    const fileExtension = fileName.split('.').pop()?.toLowerCase() || '';
    const contentType = contentTypeMap[fileExtension] || 'application/octet-stream';

    // Set headers to force download
    const headers = new Headers({
      'Content-Disposition': `attachment; filename="${fileName}"`,
      'Content-Type': contentType,
    });

    return new Response(file, { headers });
  } catch (error) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
