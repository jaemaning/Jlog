import {
    defineProperties,
    createSprinkles
} from '@vanilla-extract/sprinkles';

import { style } from './style';

const responsiveProperties = defineProperties({
    conditions: {
        mobile: {},
        tablet: { '@media': 'screen and (min-width: 768px)' },
        desktop: { '@media': 'screen and (min-width: 1024px)' }
    },
    defaultCondition: 'mobile',
    properties: {
        display: ['none', 'flex', 'block', 'inline'],
        flexDirection: ['row', 'column'],
        justifyContent: [
        'stretch',
        'flex-start',
        'center',
        'flex-end',
        'space-around',
        'space-between'
        ],
        alignItems: [
        'stretch',
        'flex-start',
        'center',
        'flex-end'
        ],
        paddingTop: style.space,
        paddingBottom: style.space,
        paddingLeft: style.space,
        paddingRight: style.space
    },
    shorthands: {
        padding: [
        'paddingTop',
        'paddingBottom',
        'paddingLeft',
        'paddingRight'
        ],
        paddingX: ['paddingLeft', 'paddingRight'],
        paddingY: ['paddingTop', 'paddingBottom'],
        placeItems: ['justifyContent', 'alignItems']
    }
});


export const sprinkles = createSprinkles(
    responsiveProperties
);