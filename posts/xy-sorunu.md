---
title: "XY Sorunu"
date: "24.06.2021 19:40"
---

XY sorunu, asıl probleminize yardım aramaktansa bu problemi çözmek için denediğiniz hatalı çözüm hakkında yardım aramaktır. Bu durum hem yardım isteyenler hem de yardım edecekler açısından oldukça zaman ve enerji kaybına yol açıyor. Biraz daha detaylandırmak gerekirse:

-   John Doe X yapmak istiyor.
-   John Doe X'i nasıl yapacağını bilmiyor, ancak Y'yi yapmayı başarırsa X için bir çözüme ulaşacığını düşünüyor.
-   John Doe Y'yi de nasıl yapacağını bilmiyor.
-   John Doe Y hakkında yardım ister.
-   Yardım etmeye çalışan insanlar John Doe'ye Y hakkında yardım ederler ancak yine de bir çözüme ulaşamazlar.
-   Çok fazla gereksiz sohbet, enerji kaybı ve zaman kaybından sonra John Doe, Y'nin X için bir çözüm olmadığını anlar ve **başa döner**.

Böylece yardım etmeye çalışan insanlar sorunun Y olduğunu ve bu soruna çözüm bulduklarını düşünür, ancak soruyu soran kişi yanıtını alamamıştır ve tekrardan başa dönerek bu sefer farklı bir "Y" üretmiştir.

Bu kısır döngüyü engellemek için soruyu soran kişinin şu adımları takip etmesi oldukça faydalıdır:

-   Sorunuzu sormak için bir ön prosedüre ihtiyacınız olmadığını hatırlayın. (Lütfen ["Soru sormak için izin almayın, direkt sorunuzu sorun."](/post/soru-sormak-icin-izin-almayin-direkt-sorunuzu-sorun) postunu okuyunuz)
-   Gerçekten ne konusunda yardıma ihtiyacınız olduğundan emin olun. X hakkında yardıma ihtiyacınız varsa X hakkında soru sorun.
-   Denediğiniz çözüm yanında bu çözümü neden denediğinizi, çözümün (olumlu, olumsuz veya eksik) sonucunu, araştırdığınız kaynakları ve aklınıza gelebilecek her türşü detayı sorunuza ekleyin, yardımcı olacak kişiye yardımcı olun.
-   Yardımcı olacak kişi daha fazla bilgi isterse onlara gerekli bilgileri sağlayın.
-   Bazı kabul etmediğiniz olası çözümleri sebepleri ile neden kabul etmediğinizi belirtin.
-   Yaptığınız çıkarımlara güvenmeyiniz, bu çıkarımlar doğru olsaydı şu an birilerine soru soruyor olmazdınız.

Bu durumu örneklendirecek olursak:

-   Bu örneğimizde bir uygulama geliştiricisi belirtilen dosyanın uzantısını belirlemek istiyor, ancak sorusunu yanlış sorduğu için boş yere zaman kaybediyor:

> **> John Doe @ 10:00AM:** Merhaba, acaba JavaScript ile bir stringin son üç harfini nasıl ayırabilirim?

> **> Jane Parker @ 10:10AM:** Merhaba John, "<String>.slice(-3)" kodu ile bir stringin son üç harfini alabilirsin.

> **> John Doe @ 11:20AM:** Merhaba, acaba JavaScript ile bir stringi nasıl noktalarından ayırabilirim? Örneğin "merhaba.dünya" şeklinde bir stringi ["merhaba", "dünya"] gibi.

> **> Cheryl Wilson @ 11:20AM:** Merhaba John, "<String>.split('.')" kodu işini görecektir.

> **> Jane Parker @ 11:40AM:** Hey John, acaba bir dosyanın uzantısını mı almaya çalışıyorsun?

> **> John Doe @ 11:45AM:** Evet Jane, bir dosyanın uzantısına ulaşmak istiyorum.

> **> Jane Parker @ 11:40AM:** Neden en başında söylemiyorsun? Bütün dosyaların uzantıları üç harf ile bitmiyor olabilir. "<String>.match(/\.([0-9a-z]+)(?:[\?#]|$)/)" kodu işine yarayacaktır.

> **> John Doe @ 12:00AM:** Oh, teşekkürler Jane! Günümü kurtardın.

-   gördüğünüz gibi John Doe sorusunu "Stringin son üç harfi nasıl alınır?" gibi sormaktansa "Bir dosyanın uzantısını nasıl alınır?" şeklinde sorsaydı hem cevabına daha hızlı ulaşırdı hem de birden çok kişi ile gereksiz sohbette bulunmazdı.
