import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Swiper.scss';
import sertificate from '../../widgets/assets/image/certificate.png';

const SwiperComponent = () => {
    const slides = [
        {
            id: 1,
            amount: "$2,634",
            trades: [
                { symbol: "XAUUSD", type: "buy", lot: 2.00, open: "2,517.19", close: "2,526.69", profit: "1,900.00" },
                { symbol: "EURCAD", type: "buy", lot: 2.00, open: "1.49615", close: "1.50110", profit: "734.14" }
            ],
            name: "Adilkhan Kelsirbekov",
            certificate: sertificate
        },
        {
            id: 2,
            amount: "$2,259",
            trades: [
                { symbol: "XAUUSD", type: "buy", lot: 1.00, open: "2,505.10", close: "2,511.10", profit: "1,159.00" },
                { symbol: "EURUSD", type: "buy", lot: 1.00, open: "1.09000", close: "1.10000", profit: "1,100.00" }
            ],
            name: "Arsen Amanov",
            certificate: sertificate
        },
        {
            id: 3,
            amount: "$1,800",
            trades: [
                { symbol: "GBPUSD", type: "sell", lot: 1.50, open: "1.30000", close: "1.28000", profit: "1,200.00" },
                { symbol: "USDJPY", type: "buy", lot: 1.00, open: "145.00", close: "146.50", profit: "600.00" }
            ],
            name: "Elena Petrova",
            certificate: sertificate
        },
        {
            id: 4,
            amount: "$1,250",
            trades: [
                { symbol: "AUDUSD", type: "buy", lot: 2.00, open: "0.6600", close: "0.6700", profit: "1,250.00" },
                { symbol: "USDCHF", type: "sell", lot: 1.00, open: "0.9000", close: "0.8950", profit: "500.00" }
            ],
            name: "Dmitry Ivanov",
            certificate: sertificate
        },
        {
            id: 5,
            amount: "$890",
            trades: [
                { symbol: "NZDUSD", type: "buy", lot: 1.00, open: "0.6100", close: "0.6190", profit: "890.00" },
                { symbol: "USDJPY", type: "sell", lot: 0.50, open: "145.00", close: "144.50", profit: "250.00" }
            ],
            name: "Aigerim Almaz",
            certificate: sertificate
        }
    ];

    return (
        <div className="results-container">
            <div className="carousel-header ">
                <h1>Результаты</h1>
            </div>

            <Swiper
                modules={[Navigation]}
                slidesPerView={1.2}
                centeredSlides={true}
                spaceBetween={20}
                loop={true}
                navigation
                breakpoints={{
                    640: { slidesPerView: 2.3 },
                    1024: { slidesPerView: 3.5 },
                }}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="carousel-slide">
                            <div className="slide-amount">{slide.amount}</div>
                            <div className="slide-trades">
                                {slide.trades.map((trade, idx) => (
                                    <div key={idx} className="trade-item">
                                        <div className="left">
                                            <span className="symbol">{trade.symbol}</span>
                                            <span className="type">{trade.type}</span>
                                            <span className="lot">{trade.lot} Lots</span>
                                            <span className="price">{trade.open} → {trade.close}</span>
                                        </div>
                                        <span className="profit">{trade.profit}</span>
                                    </div>
                                ))}
                            </div>
                            <img className="certificate-image" src={slide.certificate} alt="Certificate" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperComponent;
