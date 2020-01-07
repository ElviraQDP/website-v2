import React from 'react';
<<<<<<< HEAD
import styled, {css, keyframes} from 'styled-components';
=======
import styled, {css} from 'styled-components';
>>>>>>> e83afba14acaf91624362aa4de2103f6e6ad1b7c
import PropTypes from 'prop-types';
import {Colors} from '../../components/Styling'
import {Device} from '../Responsive'

<<<<<<< HEAD
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
export const Card = styled.div`
animation: 2s ${fadeIn} ease-out;
=======
export const Card = styled.div`
>>>>>>> e83afba14acaf91624362aa4de2103f6e6ad1b7c
    flex-direction: column;
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    background: ${props => props.color === "blue"
        ?
        `${Colors.blue}`
        : props.color === "grey"
            ? `${Colors.lightGray}`
            : `${Colors.white}`
    };
    border-radius: ${props => props.borders};
    box-shadow: ${props => props.shadow
        && `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);`
    }
    ${props =>
        props.move === "up"
            ? css`
            @media ${Device.md}{
                transform: translateY(-${props.up})
            }
            @media ${Device.xs}{
                transform: translateY(0px)    
            }
            @media screen ${Device.sm}{  
            }
            @media ${Device.lg}{
                transform: translateY(-${props.up})
            }  
            }
            @media ${Device.xl} {
                transform: translateY(-${props.up})
            }`
            :
            props.move === "down"
            && css`
            @media ${Device.md}{
                transform: translateY(${props.down})
            }
            @media ${Device.xs}{    
            }
            @media screen ${Device.sm}{
            }
            @media ${Device.lg}{
                transform: translateY(${props.down})
            }    
            }
            @media ${Device.xl} {
                transform: translateY(${props.down})
            }`
<<<<<<< HEAD
    }
=======

    }
    
>>>>>>> e83afba14acaf91624362aa4de2103f6e6ad1b7c
`;
Card.propTypes = {
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    borders: PropTypes.string,
    shadow: PropTypes.bool,
    move: PropTypes.string,
    up: PropTypes.string,
    down: PropTypes.string,
<<<<<<< HEAD
=======

>>>>>>> e83afba14acaf91624362aa4de2103f6e6ad1b7c
}
Card.defaultProps = {
    borders: '1.25rem',
};