import React from "react";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import {GifGrid} from "../../components/GifGrid";
import {useFetchGifs} from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch';

    test('debe de mostrar correctamente el component', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect( wrapper ).toMatchSnapshot()

    })

    test('debe de mostrar items cuando se carga imagenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualguier/cosa.jpg',
            title: 'Cualquier cosa'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect( wrapper ).toMatchSnapshot();

    })

})