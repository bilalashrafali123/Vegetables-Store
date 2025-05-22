import "./index.scss"

interface IBannerProps {
    title: string;
    title2 : string
  }

const ShopBanner = (props: IBannerProps) => {
  return (
    <div className="Shop-banner-section">
        <h2 className="Shop-banner-section-heading">
          {props.title} <br />
        </h2>
        <div className="Shop-banner-section-links">
          <a href="#" className="active">
            Home /
          </a>
          <a href="#" className="active">
            Pages /
          </a>
          <a href="#" className="active-white">
            {props.title2}
          </a>
        </div>
      </div>
  )
}

export default ShopBanner