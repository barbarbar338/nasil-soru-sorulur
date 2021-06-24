import { FC } from "react";
import { toast } from "react-toastify";
import { useCopyToClipboard } from "react-use";
import { Link } from "../Link";

export const Hero: FC = () => {
	const [_, copy] = useCopyToClipboard();

	const copyShareURL = () => {
		copy(window.location.href);
		toast.success(
			"Siteyi paylaşabilmeniz için gerekli olan URL panonuza kopyalandı!",
		);
	};

	return (
		<div className="card row-span-2 shadow-lg col-span-1 md:col-span-2 xl:col-span-3 bg-base-100">
			<div className="card-body">
				<h2 className="my-4 text-4xl font-bold card-title text-primary">
					Başkalarının da öğrenmesine yardımcı olun!
				</h2>
				<div className="mb-4 space-x-2 card-actions">
					<div className="badge badge-ghost">Arkadaşlarınız</div>
					<div className="badge badge-ghost">Aileniz</div>
					<div className="badge badge-ghost">Akrabalarınız</div>
					<div className="badge badge-ghost">Tanıdıklarınız</div>
				</div>
				<p className="text-base-content mb-10">
					Bu sitenin amacı, sizlere nasıl efektif bir şekilde soru
					sorabileceğinizi ve nasıl daha hızlı yanıt alabileceğinizi
					öğretmektir. Bu siteyi arkadaşlarınız, aileniz,
					akrabalarınız ve tanıdıklarınızla paylaşarak başkalarının bu
					değerli bilgileri öğrenmesine yardımcı olun! Gereksiz
					prosedürlere, gereksiz zaman kaybına ve saçma konuşmalara
					hep birlikte son verelim. Böylece siz cevabınıza hızlıca
					ulaşın, sizin sorunuza cevap verecek kişiler de boş yere
					sizlerin sorusunu sormasını beklemesin.
				</p>
				<p className="text-base-content">
					Ayrıca bir eksiklik veya hata görüyorsanız lütfen bizlere{" "}
					<Link
						href="https://barbarbar338.fly.dev/discord"
						placeholder="bu linkten"
						className="text-primary cursor-pointer"
					/>{" "}
					bildirmekten çekinmeyin!
				</p>
				<div className="justify-end space-x-2 card-actions">
					<div data-tip="Bu Sayfayı Paylaş" className="tooltip">
						<button onClick={copyShareURL} className="btn">
							Paylaş!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
