import React from 'react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import Card from '../Card';

const EmblaCarousel = ({ options, pet }) => {


    // Inicializa Embla Carousel
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi);

    return (
        <section className="container mt-4">
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container d-flex">
                        {/* Mapea sobre pet y renderiza una Card para cada mascota */}
                        {pet && pet.map((item) => (
                            <div key={item.id} className="embla__slide">
                                <Card pet={item} /> {/* Pasa el objeto `item` como prop a `Card` */}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="embla__controls">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} className="btn btn-primary m-2" />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} className="btn btn-primary" />
                </div>
            </div>
        </section>
    );
};

export default EmblaCarousel;
