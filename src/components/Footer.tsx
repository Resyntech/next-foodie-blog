import { Social, Typography } from './'

const Footer = () => {
  return <footer className='flex flex-col p-8 bg-footerColor dark:text-yellow-200 dark:bg-slate-900'>
    <div className=' grid grid-cols-2 px-5 pb-10 pt-2 border-l-4 border-yellow-500 items-center'>
        <Typography style='justify-self-start' label='Subscribe for more recipe' />
        <div className='justify-self-end'>
            <Social dimension={ 30 } />
        </div>
    </div>
    <Typography style='text-center underline text-sm' label='Food that you should never miss.' />
  </footer>
}

export default Footer