import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EmbedVideoService } from '../../_shared/embed-video.service';

@Component({
    selector: 'app-library',
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit, AfterViewInit {

    iframe_html: any;
    youtubeUrl = "https://www.youtube.com/watch?v=Jer8XjMrUB4";
    showMovieList: boolean = false;

    httpPayload: any[] = [{
        movieTitle: "X-Men Apocalypse",
        movieDescription: "Marvel's X-Men universe, amassed the powers of many other mutants, becoming immortal and invincible. Upon awakening after thousands f years, he is disillusioned with the world as he finds it and recruits a team of powerful mutants, including a disheartened Magneto (Michael Fassbender), to cleanse mankind and create a new world order, over which he will reign.",
        movieLink: "https://www.youtube.com/watch?v=Jer8XjMrUB4",
        videoHtml: ""
    },
    {
        movieTitle: "Iron Man 3",
        movieDescription: " Still traumatized by the events of \"The Avengers,\" Iron Man battles an enigmatic terrorist called the Mandarin with the help of Col. James Rhodes and a precocious young boy in this thrill-a-minute sequel.",
        movieLink: "https://www.youtube.com/watch?v=oYSD2VQagc4",
        videoHtml: ""
    },
    {
        movieTitle: "Thor: Ragnarok",
        movieDescription: "Marvel Animated Features premieres two all new action packed features together on one release. HULK VS. Thor: The Incredible Hulk has been tearing a line across the Canadian countryside, leaving a swathe of destruction in his wake. He must be stopped at all costs, and there's only one man up to the job. He's the best there is at what he does, but what he does isn't very nice.",
        movieLink: "https://www.youtube.com/watch?v=ue80QwXMRHg",
        videoHtml: ""
    },
    {
        movieTitle: "Captain America: Civil War",
        movieDescription: "Former teammates Iron Man and Captain America clash over a proposal that would make the Avengers accountable to government oversight. Soon, the rest of the Marvel heroes take sides in the conflict in this thrillingly epic comic-book adventure.",
        movieLink: "https://www.youtube.com/watch?v=dKrVegVI0Us",
        videoHtml: ""
    }
    ];

    constructor(private embedService: EmbedVideoService) {
        this.iframe_html = this.embedService.embed(this.youtubeUrl);
        this.httpPayload.forEach(element => {
            element.videoHtml = this.embedService.embed(element.movieLink);
        });
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.showMovieList = true;
    }

}
