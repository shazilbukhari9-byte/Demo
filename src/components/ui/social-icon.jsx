import { Button } from "@/components/ui/button";

const ButtonSocialIconDemo = () => {
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      {/* google */}
      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
      >
        <img
          src="https://ps.w.org/zoho-crm-forms/assets/icon-128x128.png?rev=2951621"
          alt="zoho crm icon"
          className="h-5 w-5"
        />
      </Button>
      {/* github */}
      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
      >
        <img
          src="https://media.licdn.com/dms/image/v2/D560BAQEljjHFfEVKSQ/company-logo_200_200/B56ZeOpr0sGQAM-/0/1750444982211/freshworks_inc_logo?e=2147483647&v=beta&t=0qT5QYxDSoiPe_B_9pULlslOaOQUUl4pOiTSEK_pHgI"
          alt="freshworks crm icon"
          className="dark:hidden h-5 w-5"
        />
        
      </Button>
      {/* linkedin */}
      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
      >
        <img
          src="https://play-lh.googleusercontent.com/2HKqtqGvSNo-Dg0wFJPEBYft5IePrOEiUJhb4vtoziRWUkkGv4EXN0STI8NoDB94kA=w240-h480-rw"
          alt="leadsquared icon"
          className="h-5 w-5"
        />
      </Button>
      {/* facebook */}
      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
      >
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/016/716/455/small/whatsapp-for-business-icon-free-png.png"
          alt="whatsapp icon"
          className="h-5 w-5"
        />
        </Button>

        <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
      >
        <img
          src="https://play-lh.googleusercontent.com/2BQu8Y7Ah9Gh9CZvmaMSYIcZvdO4KfdJ26EZ1WGyaOG_xxeDxNn-AZYxOtQJvyQQPFY=w600-h300-pc0xffffff-pd"
          alt="razorpay icon"
          className="h-6 w-6"
        />
      </Button>

      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
      >
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2023/11/364817883/ZE/NO/TC/2136574/tally-prime-500x500.png"
          alt="tally prime icon"
          className="h-6 w-6"
        />
      </Button>

      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png"
          alt="salesforce icon"
          className="h-5 w-5"
        />
      </Button>

      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
      >
        <img
          src="https://www.drupal.org/files/styles/grid-4-2x/public/_brand_assets_images_logos_zapier-logomark.png?itok=dn0SxPCq"
          alt="zappier icon"
          className="h-5 w-5"
        />
      </Button>

      <Button
        variant="outline"
        type="button"
        className="rounded-lg hover:scale-120 transition-all duration-300 cursor-pointer"
      >
        <img
          src="https://play-lh.googleusercontent.com/aLyTpWFTbPsCXQuEI2fBxlm2A6PDk0vnNo22DJ_j7YSSuuMGtzP4h4L1kXvBBOdhF5fI0lu0jipgSRsZBaeUXNs=w240-h480-rw"
          alt="hubsport icon"
          className="h-5 w-5"
        />
      </Button>
    </div>
  );
};

export default ButtonSocialIconDemo;
