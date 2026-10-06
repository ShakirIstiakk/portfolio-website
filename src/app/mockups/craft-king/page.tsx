import React from "react";
import Image from "next/image";
import { Star, Shield, Truck, Award, CheckCircle, ArrowRight, ShoppingCart, Heart, Phone, Search, User, ChevronRight, MessageCircle } from "lucide-react";

export default function CraftKingMockupPage() {
  const products = [
    {
      name: "Kids Desk & Chair Set",
      bengaliName: "কিডস ডেস্ক ও চেয়ার সেট",
      price: "৳ ৩,৫০০",
      oldPrice: "৳ ৪,০০০",
      rating: 5,
      tag: "Best Seller",
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Kids Learning Tower",
      bengaliName: "কিডস লার্নিং টাওয়ার",
      price: "৳ ৪,২০০",
      oldPrice: "৳ ৫,০০০",
      rating: 5,
      tag: "Popular",
      img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Climbing Arch Slide Ramp",
      bengaliName: "ক্লাইম্বিং আর্চ স্লাইড র‍্যাম্প",
      price: "৳ ২,৫০০",
      oldPrice: "৳ ৩,০০০",
      rating: 5,
      tag: "Hot",
      img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Climbing Arch Cushion",
      bengaliName: "ক্লাইম্বিং আর্চ কুশন",
      price: "৳ ১,৮০০",
      oldPrice: "৳ ২,২০০",
      rating: 5,
      tag: "New",
      img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Round Sitting Stool",
      bengaliName: "গোল সিটিং স্টুল",
      price: "৳ ৯৫০",
      oldPrice: "৳ ১,২০০",
      rating: 5,
      tag: "Budget",
      img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Multifunctional Kids Learning Tower",
      bengaliName: "মাল্টিফাংশনাল লার্নিং টাওয়ার",
      price: "৳ ৪,৫০০",
      oldPrice: "৳ ৫,৫০০",
      rating: 5,
      tag: "Top Rated",
      img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Multifunctional Climbing Arch (2 in 1)",
      bengaliName: "মাল্টিফাংশনাল ক্লাইম্বিং আর্চ (২ ইন ১)",
      price: "৳ ৩,৫০০",
      oldPrice: "৳ ৪,২০০",
      rating: 5,
      tag: "Featured",
      img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Multifunctional Climbing Arch",
      bengaliName: "মাল্টিফাংশনাল ক্লাইম্বিং আর্চ",
      price: "৳ ৩,২০০",
      oldPrice: "৳ ৩,৮০০",
      rating: 5,
      tag: "Bestseller",
      img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const categories = [
    { title: "Climbing Arch", desc: "শিশুর মোটর স্কিল ও ব্যালান্স ডেভেলপমেন্ট আর্চ", img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80" },
    { title: "Learning Tower", desc: "কিচেন ও বেসিনের কাজে শিশুর নিরাপদ হেল্পার", img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80" },
    { title: "Kids Reading Table", desc: "শিশুর পড়ার ও আঁকার জন্য আরামদায়ক কাঠের টেবিল", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80" },
    { title: "Outdoor Lounger", desc: "সহজেই রিল্যাক্স করার উপযোগী কাঠের লাউঞ্জার", img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C241E] font-sans antialiased selection:bg-[#B45309] selection:text-white">
      {/* 1. Top Bar */}
      <div className="bg-[#24170F] text-[#EFECE6] py-2 px-8 text-xs font-medium flex justify-between items-center border-b border-[#3D2B1F]">
        <div className="flex items-center gap-2">
          <Phone className="w-3.5 h-3.5 text-[#D97706]" />
          <span>Call Us on WhatsApp: 01326 015 300</span>
        </div>
        <div className="flex items-center gap-5 text-xs text-[#C8BFAF]">
          <span className="hover:text-white cursor-pointer transition">Facebook</span>
          <span>•</span>
          <span className="hover:text-white cursor-pointer transition">Instagram</span>
          <span>•</span>
          <span className="hover:text-white cursor-pointer transition">YouTube</span>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <header className="bg-white border-b border-[#EAE2D5] sticky top-0 z-40 px-8 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-serif font-black text-2xl tracking-tighter text-[#24170F] uppercase">
              CRAFT KING
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-bold text-[#5C4D3E]">
            <a href="#shop" className="text-[#B45309]">Shop</a>
            <a href="#furniture" className="hover:text-[#B45309] transition">Furniture</a>
            <a href="#playsets" className="hover:text-[#B45309] transition">Play Sets</a>
            <a href="#double-offer" className="hover:text-[#B45309] transition">Double Offer</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#F8F5EE] border border-[#E5DACD] rounded-full py-1.5 pl-4 pr-9 text-xs focus:outline-none focus:border-[#B45309] w-48"
              />
              <Search className="w-3.5 h-3.5 text-[#8F7D6B] absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
            <button className="relative p-2 text-[#24170F] hover:text-[#B45309] transition">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-[#B45309] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button className="p-2 text-[#24170F] hover:text-[#B45309] transition">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* 3. Hero Section (Authentic Nursery Lifestyle Room) */}
      <section className="relative overflow-hidden bg-[#EFE8DC] py-20 px-8 border-b border-[#EAE2D5]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#24170F] leading-[1.15] tracking-tight">
              শিশুর শেখা, খেলা ও বেড়ে ওঠার জন্য{" "}
              <span className="text-[#B45309]">স্মার্ট স্পেস</span>
            </h1>

            <p className="text-base sm:text-lg text-[#5C4D3E] leading-relaxed max-w-xl font-medium">
              ১০০% প্রাকৃতিক সলিড পাইনউড দিয়ে তৈরি শিশুদের পরিবেশ-বান্ধব ফার্নিচার — নিরাপদ, টেকসই ও মনোমুগ্ধকর।
            </p>

            <div>
              <button className="px-8 py-4 bg-[#24170F] text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-xl hover:bg-[#B45309] transition-all flex items-center gap-2">
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#D5C7B4]">
              <Image
                src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=85"
                alt="Craft King Nursery Room"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. 4 Value Badges Strip */}
      <section className="bg-white py-12 px-8 border-b border-[#EAE2D5]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F8F5EE] border border-[#EAE2D5] text-[#B45309] flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-[#24170F]">Premium Quality</h4>
              <p className="text-xs text-[#7A6B5A] mt-1">১০০% সলিড পাইনউড দিয়ে তৈরি</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F8F5EE] border border-[#EAE2D5] text-[#24170F] flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-[#24170F]">Affordable Pricing</h4>
              <p className="text-xs text-[#7A6B5A] mt-1">সরাসরি কারখানা থেকে সাশ্রয়ী মূল্যে</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F8F5EE] border border-[#EAE2D5] text-[#B45309] flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-[#24170F]">SuperFast Delivery</h4>
              <p className="text-xs text-[#7A6B5A] mt-1">দ্রুত ও নিরাপদ হোম ডেলিভারি</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F8F5EE] border border-[#EAE2D5] text-[#24170F] flex items-center justify-center shrink-0">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-[#24170F]">Value for Money</h4>
              <p className="text-xs text-[#7A6B5A] mt-1">দীর্ঘস্থায়ী ব্যবহার নিশ্চিত করে</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Best Selling Products (8 Products Grid) */}
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-[#24170F]">
            Best Selling Products
          </h2>
          <div className="w-16 h-1 bg-[#B45309] mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#EAE2D5] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-square bg-[#F8F5EE] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#B45309] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                  Sale!
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm text-[#24170F] leading-snug">
                    {item.bengaliName}
                  </h3>
                  <p className="text-[11px] text-[#7A6B5A] mt-0.5">{item.name}</p>
                </div>

                <div className="pt-4 border-t border-[#F2ECE1] mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#7A6B5A] line-through block">{item.oldPrice}</span>
                    <span className="text-base font-black text-[#B45309]">{item.price}</span>
                  </div>
                  <button className="px-3.5 py-1.5 bg-[#24170F] text-white text-xs font-bold rounded hover:bg-[#B45309] transition shadow">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Featured Categories */}
      <section className="bg-[#FAF7F2] py-20 px-8 border-y border-[#EAE2D5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-[#24170F]">Featured Categories</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((c, idx) => (
              <div key={idx} className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md group">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24170F]/90 via-[#24170F]/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-black">{c.title}</h3>
                  <p className="text-xs text-[#E5DACD] mt-1">{c.desc}</p>
                  <button className="mt-4 px-4 py-2 bg-[#B45309] text-white text-xs font-bold rounded-lg w-max flex items-center gap-1.5 hover:bg-[#92400E] transition">
                    <span>View More</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. What Our Customers Say */}
      <section className="py-20 px-8 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-black text-[#24170F] mb-10">What Our Customers Say</h2>
        <div className="bg-white p-8 rounded-2xl border border-[#EAE2D5] shadow-sm max-w-2xl mx-auto">
          <div className="flex justify-center gap-1 text-[#F59E0B] mb-3">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <p className="text-sm text-[#5C4D3E] italic leading-relaxed">
            &ldquo;বাচ্চার জন্য লার্নিং টাওয়ার অর্ডার করেছিলাম। কাঠের ফিনিশিং খুবই মসৃণ ও প্রিমিয়াম। কোন শার্প কর্নার নেই, একদম নিরাপদ। অনেক ধন্যবাদ ক্রাফট কিং টিমকে!&rdquo;
          </p>
          <div className="mt-4">
            <span className="font-bold text-xs text-[#24170F] block">ফারহানা জামান</span>
            <span className="text-[11px] text-[#8F7D6B]">গুলশান, ঢাকা</span>
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="bg-white py-16 px-8 border-t border-[#EAE2D5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-[#24170F] mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              "ফার্নিচার তৈরিতে কি ধরনের কাঠ ব্যবহার করা হয়?",
              "ডেলিভারি পেতে কতদিন সময় লাগে?",
              "কোন অগ্রিম পেমেন্ট করতে হয় কি?",
              "প্রোডাক্ট ড্যামেজ হলে কি পরিবর্তন করা যাবে?",
            ].map((q, idx) => (
              <div key={idx} className="p-4 bg-[#FDFBF7] border border-[#EAE2D5] rounded-xl flex justify-between items-center text-xs font-bold text-[#24170F]">
                <span>{q}</span>
                <ChevronRight className="w-4 h-4 text-[#B45309]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Dark Brown Footer */}
      <footer className="bg-[#24170F] text-[#EFECE6] py-16 px-8 border-t border-[#3D2B1F]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <span className="font-serif font-black text-2xl tracking-tighter uppercase text-white block">
              CRAFT KING
            </span>
            <p className="text-xs text-[#A89D8F] mt-3 leading-relaxed">
              Crafting premium eco-friendly wooden Montessori play sets and nursery furniture for growing children.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#D97706] mb-3">Company</h4>
            <ul className="space-y-2 text-xs text-[#C8BFAF]">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Return Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#D97706] mb-3">Support</h4>
            <ul className="space-y-2 text-xs text-[#C8BFAF]">
              <li>Customer Care</li>
              <li>How to Order</li>
              <li>Order Tracking</li>
              <li>Frequently Asked Questions</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#D97706] mb-3">Get in Touch</h4>
            <p className="text-xs text-[#C8BFAF]">WhatsApp: 01326 015 300</p>
            <p className="text-xs text-[#C8BFAF] mt-1">support@craftking.com.bd</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-[#3D2B1F] flex justify-between text-[11px] text-[#8F7D6B]">
          <span>Copyright 2024 Craft King. All Rights Reserved.</span>
          <span>Designed &amp; Developed with High-Performance WooCommerce</span>
        </div>
      </footer>
    </div>
  );
}
