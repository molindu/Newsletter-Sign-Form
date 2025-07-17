import './App.css'
import DesktopIcon from './assets/icons/illustration-sign-up-desktop.svg'
import MobileIcon from './assets/icons/illustration-sign-up-mobile.svg'
import TabletIcon from './assets/icons/illustration-sign-up-tablet.svg'
import IconList from './assets/icons/icon-list.svg'
import Form from './components/From.tsx';

function App() {
    return (
        <main>
            <div className=" flex p-0 sm:p-4 bg-White rounded-[18px] m-4 flex-col-reverse sm:flex-row">
                <div className="form-control">
                    <h1>Stay updated!</h1>
                    <div>Join 60,000+ product managers receiving monthly updates on:</div>
                    <div className={'form-text flex-col'}>
                        <div className={'form-text'}>
                            <img src={IconList} alt="icon list"/>
                            Product discovery and build what matters
                        </div>
                        <div className={'form-text'}>
                            <img src={IconList} alt="icon list"/>
                            Measuring to ensure updates are a success
                        </div>
                        <div className={'form-text'}>
                            <img src={IconList} alt="icon list"/>
                            And much more!
                        </div>
                    </div>
                    <Form/>
                </div>
                <picture className={'picture'}>
                    <source media="(max-width: 640px)" srcSet={MobileIcon}/>
                    <source media="(max-width: 1024px)" srcSet={TabletIcon}/>
                    <img
                        src={DesktopIcon}
                        alt={'Desktop Icon'}
                        className={'item-card-image'}
                    />
                </picture>
            </div>
        </main>
    )
}

export default App
