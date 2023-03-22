import {
  ArrowDownLeftSVG,
  BottleSVG,
  ScissorsSVG,
  SyringeSVG,
} from "images/index";
import "./Price.scss";

interface PriceItemProps {
  title: string;
  price: number;
}

function PriceItem({ title, price }: PriceItemProps) {
  return (
    <div className="flex items-center justify-between pb-2">
      <p>{title}</p>
      <p>от {price}р</p>
    </div>
  );
}

function PricePage() {
  return (
    <div className="mt-36 flex justify-between px-16 md:mt-36 xl:mt-36">
      <div className="mt w-1/3">
        <div className="mb-16">
          <div className="mb-8 flex justify-between">
            <span className="flex">
              <ArrowDownLeftSVG />
              <span className="pt-1 pl-2">Анализы</span>
            </span>
            <BottleSVG />
          </div>
          <div className="">
            <PriceItem title="крови у кошек" price={1000} />
            <PriceItem title="крови у собак" price={1000} />
            <PriceItem title="биохимический анализ крови собаки" price={1500} />
            <PriceItem title="биохимический анализ крови кошки" price={1500} />
            <PriceItem title="на пироплазмоз" price={1500} />
            <PriceItem title="на анализ на панлейкопению" price={1500} />
            <PriceItem title="на токсоплазмоз у кошки" price={1500} />
          </div>
        </div>
        <div>
          <div className="mb-8 flex justify-between">
            <span className="flex">
              <ArrowDownLeftSVG />
              <span className="pt-1 pl-2">Груминг</span>
            </span>
            <ScissorsSVG />
          </div>
          <div className="">
            <PriceItem title="крови у кошек" price={1000} />
            <PriceItem title="крови у собак" price={1000} />
            <PriceItem title="биохимический анализ крови собаки" price={1500} />
            <PriceItem title="биохимический анализ крови кошки" price={1500} />
            <PriceItem title="на пироплазмоз" price={1500} />
            <PriceItem title="на анализ на панлейкопению" price={1500} />
            <PriceItem title="на токсоплазмоз у кошки" price={1500} />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="mb-16">
          <div className="mb-8 flex justify-between">
            <span className="flex">
              <ArrowDownLeftSVG />
              <span className="pt-1 pl-2">Процедуры</span>
            </span>
            <SyringeSVG />
          </div>
          <div className="">
            <PriceItem title="крови у кошек" price={1000} />
            <PriceItem title="крови у собак" price={1000} />
            <PriceItem title="биохимический анализ крови собаки" price={1500} />
            <PriceItem title="биохимический анализ крови кошки" price={1500} />
            <PriceItem title="на пироплазмоз" price={1500} />
            <PriceItem title="на анализ на панлейкопению" price={1500} />
            <PriceItem title="на токсоплазмоз у кошки" price={1500} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricePage;
