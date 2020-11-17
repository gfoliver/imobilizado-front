import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: rgba(255,255,255,0.05);
    height: 192px;
    border-radius: 4px;
    position: relative;
    color: ${props => props.theme.colors.text};
    transition: all .3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .preview {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }

    &.dragging {
        background-color: rgba(255,255,255, 0.03);

        .overlay {
            background-color: rgba(255,255,255, 0.03);
            
            svg {
                transform: translateY(-5px);
            }
        }
    }

    &.hasPreview:after {
        opacity: 0;
    }

    .overlay {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(255,255,255, 0.03);
        transition: all .3s ease;
        width: 50px;
        height: 50px;
        border-radius: 8px;

        svg {
            transform: translateY(0);
            transition: all .3s ease;
        }
    }

    p {
        margin: 90px 0 0;
    }
    
    &:after {
        content: '';
        position: absolute;
        width: calc(100% - 64px);
        height: calc(100% - 64px);
        left: 32px;
        top: 32px;
        border: dashed 1px $color-primary;
        border-radius: 8px;
    }
`;