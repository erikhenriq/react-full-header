import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('React Full Header', module)
    .add('with title', () => (
        <FullHeader title="TDD" />
    ))
    .add('with title, subtitle and bgColor', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática."
            bgColor="#3299BB"
        />
    ))
    .add('with title, subtitle, bgColor and textColor', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática."
            bgColor="#3299BB"
            textColor="#FF9900"
        />
    ))
    .add('with title, subtitle, bgColor, textColor and font', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática."
            bgColor="#96060C"
            textColor="#FF9900"
            font="cursive"
        />
    ))
    .add('with title, subtitle, bgImg', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática."
            bgImg="https://raw.githubusercontent.com/willianjusten/photo-examples/master/iceland-glacier.jpg"
        />
    ))
    .add('with title, subtitle and video', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática."
            bgColor="#EBE9EB"
            textColor="#3299BB"
            video="https://storage.googleapis.com/coverr-main/mp4%2FCaramoan%20Drone.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=coverr-183014%40appspot.gserviceaccount.com%2F20190930%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20190930T104534Z&X-Goog-Expires=300&X-Goog-SignedHeaders=host&X-Goog-Signature=5ed2ac225bdbd3cd0db8eec09129ab42f8d0bb6c10bbecc9c8dd9deb0c544c6b696f6a664c5062f8ac09d353b4b878dcea42c6f89ce1d0363e994ae7aca01ed5098ddbbfa54ab60eadc2971e9023b4145eee1d1b4f87c81b6e70aa678ec5d506ead1615c4fc664495ae9439dae0d0b214f713d07a7320b680db41fd45fb44839031be000dea412cc126d537f7c77ed10e57f3f75672dfae2127d04a462afd8c1c7aa1593d3cfa55c95919a4143517d975ed137abbc3426a104913458ebd392d89ac1c4e296d9aa5adbbfba3235082d937ee9ead792769d3d6e93f7295c87f32c1c9c4afe3d39fab17a5b2fcafe8bf638b550ba51c1a1822faaf3125dcf3a2ef9"
        />
    ));
