import { Injectable, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class ServicsIconService {
  private sanitizer = inject(DomSanitizer);
  constructor() {}

  icon: SafeHtml = this.sanitizer.bypassSecurityTrustHtml('');
  servicesData = [
    {
      icon: '<i class="fas fa-hashtag service-icon"></i>',
      middleText: 'Social Media Management',
      endText:
        'Comprehensive social media strategies to grow your audience and engagement across all platforms.',
    },
    {
      icon: '<i class="fas fa-video service-icon"></i>',
      middleText: 'Video Editing',
      endText:
        'Professional video editing services to create compelling content that captures attention.',
    },
    {
      icon: '<i class="fas fa-bullseye service-icon"></i>',
      middleText: 'Performance Campaigns',
      endText:
        'Data-driven advertising campaigns designed to deliver measurable results and ROI.',
    },
    {
      icon: '<i class="fas fa-search service-icon"></i>',
      middleText: 'Search Engine Optimization',
      endText:
        " Improve your website's visibility and organic traffic with our proven SEO strategies.",
    },
    {
      icon: '<i class="fas fa-film service-icon"></i>',
      middleText: '3D Reels',
      endText:
        'Cutting-edge 3D reel production to make your content stand out on social media.',
    },
    {
      icon: '<i class="fas fa-envelope service-icon"></i>',
      middleText: 'Email Campaigns',
      endText:
        'Targeted email marketing campaigns to nurture leads and convert them into customers.',
    },
     {
      icon: '<i class="fa-solid fa-panorama"></i>',
      middleText: 'Photography',
      endText:
        'Professional photography services to capture your brand story and showcase your products.',
    },
  ];

  getService() {
    return this.servicesData.map((service) => ({
      ...service,
      icon: this.sanitizer.bypassSecurityTrustHtml(service.icon),
    }));
  }
  portfolioData = [
    {
      imageLink:
        'https://i.postimg.cc/VvHmxKKq/Whats-App-Image-2025-03-25-at-20-03-59-0e28b9d8.jpg',
      title: 'Sugar Brand Campaign',
      text: '<strong>Social media strategy that increased</strong> <br> engagement by 250%',
    },
    {
      imageLink: 'https://i.postimg.cc/SsbrXZC6/amolla-Recovered.png',
      title: 'Home Furniture Designs campaign',
      text: ' <strong>Organic traffic growth of  300% in 6 months</strong>',
    },
    {
      imageLink:
        'https://i.postimg.cc/DyvxdYD5/472596139-598758513109080-2213686503437085877-n.jpg',
      title: 'Kitchen design Video Campaign',
      text: 'Viral video campaign with 2M+ views',
    },
    {
      imageLink:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'E-commerce Email Series',
      text: '25% conversion rate and $50k+ in sales',
    },
    {
      imageLink:
        'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      title: '3D Product Reel',
      text: 'Viral product showcase with 500k+ engagements',
    },
    {
      imageLink:
        'assets/image/image.png',
      title: 'Performance Ad Campaign',
      text: '5x ROAS for beauty brand',
    },
  ];
  getPortfolioData() {
    return this.portfolioData.map((portfolioItem) => ({ ...portfolioItem }));
  }

clientData=[
  {
    comment:' "Neux  transformed our online presence completely. Their social media strategy helped us triple our engagement and double our leads in just three months" ',
    name:'Sarah K.',
    job:"CEO, Fashion Boutique"
  },
   {
    comment:' "The performance marketing campaigns developed by Neux boosted our sales by 180% while maintaining excellent ROI. Highly recommend their data-driven approach" ',
    name:'Ahmed R.',
    job:"Marketing Director, Tech Startup"
  },
   {
    comment:' "Working with Neux has been a game-changer. Their creative team consistently delivers innovative solutions that exceed our expectations" ',
    name:'Jessica L.',
    job:"Brand Manager, Consumer Goods"
  }
]

getDataOfClient(){
  return this.clientData.map((client)=>{
    return {...client}
  })  }
}
