import { GrDocumentPdf } from 'react-icons/gr'
import MainLayout from '@/layouts/Main'

function DownloadPage() {
  const meta = {
    title: 'Download',
  }

  const files = [
    {
      name: 'Resume',
      url: '/download/Resume_Sadam.pdf',
      icon: <GrDocumentPdf />,
    },
    {
      name: 'BNSP Junior Web Developer Certificate',
      url: '/download/BNSP_Sadam.pdf',
      icon: <GrDocumentPdf />,
    },
    {
      name: 'FGA Kominfo UI/UX Certificate',
      url: '/download/FGA_Kominfo_UIUX_Sadam.pdf',
      icon: <GrDocumentPdf />,
    },
  ]

  return (
    <MainLayout meta={meta}>
      <h1 className='font-semibold text-xl lg:text-2xl'>Download</h1>

      <hr className='my-4' />

      <div className='flex flex-col gap-6'>
        {files.map((file) => (
          <a
            key={file.url}
            href={file.url}
            className='flex items-start gap-4 text-lg'
            target='_blank'
            rel='noopener noreferrer'>
            {file.icon}

            <p className='text-base hover:underline'>{file.name}</p>
          </a>
        ))}
      </div>
    </MainLayout>
  )
}

export default DownloadPage
