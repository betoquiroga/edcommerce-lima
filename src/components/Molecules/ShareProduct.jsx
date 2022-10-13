import { BsFacebook, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs"
import ShareItem from "../Atoms/ShareItem"

const ShareProduct = () => {
  return (
    <div>
      <p className="text-lg font-semibold mb-2">Comparte este producto</p>
      <div className="flex gap-2">
        <ShareItem icon={BsWhatsapp} />
        <ShareItem icon={BsFacebook} />
        <ShareItem icon={BsTwitter} />
        <ShareItem icon={BsLinkedin} />
      </div>
    </div>
  )
}

export default ShareProduct
