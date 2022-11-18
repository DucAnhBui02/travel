/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { ContentTop } from './content-top'
import { ContentBottom } from './content-bottom'

export const Content = () => {
    
    return (
        <section className='content-area' id='content'>
            <ContentTop/>
            <ContentBottom/>
        </section>
    )
}