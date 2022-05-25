import React from 'react'
import Image from '../components/Image'
import Weewa from '../assets/Animations/Elira-Animation_500px.gif'
import RyuguardA from '../assets/Animations/Finana-AnimationA_500px.gif'
import RyuguardB from '../assets/Animations/Finana-AnimationB_500px.gif'
import Pomudachi from '../assets/Animations/Pomu-Animation_500px.gif'
import ArtBoardLayout, { ArtBoardEnum } from '../components/ArtBoardLayout'
import MessageBoxesLayout from '../components/MessageBoxesLayout'
import '../components/TalentLayout.scss'

interface Props {
  page: string
}

export default function Art (props: Props): JSX.Element {
  return (
    <div className='talent-layout-container'>
      <div className='talent-animation-container'>
        {/* (Brandon): Number of images and class of last image is hardcoded into 'talent-animation-container' */}
        <Image src={Weewa} enableZoom />
        <Image src={RyuguardA} enableZoom />
        <Image src={Pomudachi} enableZoom />
        <div className='hide-on-tablet'>
          <Image src={RyuguardB} enableZoom />
        </div>
      </div>

      <ArtBoardLayout
        artBoard={ArtBoardEnum.lazulight}
        heading='Community Collage'
      />

      {/* Art */}
      <MessageBoxesLayout
        enableLazulight
        titleType='all'
        enableElira
        enablePomu
        enableFinana
        enableDcl={false}
        enableFolding={false}
        enableArt
        heading='All Fan Art'
        page={props.page}
      />
    </div>
  )
}
