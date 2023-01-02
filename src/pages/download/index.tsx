import { GrDocumentPdf } from 'react-icons/gr'
import MainLayout from '@/layouts/Main'
import css from './styles.module.scss'

function DownloadPage() {
  const meta = {
    title: 'Download',
  }

  const files = [
    {
      name: 'Resume',
      url: '/download/Resume_Sadam.pdf',
      icon: <GrDocumentPdf className={css.icon} />,
    },
    {
      name: 'BNSP Junior Web Developer Certificate',
      url: '/download/BNSP_Sadam.pdf',
      icon: <GrDocumentPdf className={css.icon} />,
    },
    {
      name: 'FGA Kominfo UI/UX Certificate',
      url: '/download/FGA_Kominfo_UIUX_Sadam.pdf',
      icon: <GrDocumentPdf className={css.icon} />,
    },
  ]

  return (
    <MainLayout meta={meta}>
      <h1 className={css.title}>Download</h1>
      <hr className={css.divider} />

      <div className={css.container}>
        {files.map((file) => (
          <a
            key={file.url}
            href={file.url}
            className={css.item}
            target='_blank'
            rel='noopener noreferrer'>
            {file.icon}
            <p className={css.filename}>{file.name}</p>
          </a>
        ))}
      </div>
    </MainLayout>
  )
}

export default DownloadPage
