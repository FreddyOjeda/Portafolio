import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;

  // Lista de canciones con sus propiedades
  songs = [
    { 
      autor: 'Bruno Mars', 
      folder: 'assets/music/bruno/', 
      albumCover: 'assets/images/bruno-portada.jpeg',
      tracks: ['Bruno Mars - The Lazy Song.mp3', 'Locked Out Of Heaven - Bruno Mars.mp3', 'Uptown Funk - Bruno Mars.mp3'] 
    },
    { 
      autor: 'Coldplay', 
      folder: 'assets/music/coldplay/', 
      albumCover: 'assets/images/coldplay-portada.jpeg',
      tracks: ['Coldplay - A Sky Full Of Stars.mp3', 'Coldplay - Clocks.mp3', 'Coldplay - Viva la Vida.mp3'] 
    },
    { 
      autor: 'Imagine Dragons', 
      folder: 'assets/music/imagine/', 
      albumCover: 'assets/images/imagine-dragons-portada.jpeg',
      tracks: ['Imagine Dragons - Believer.mp3', 'Imagine Dragons - Bones.mp3', 'Imagine Dragons - Radioactive.mp3'] 
    }
  ];

  // Variables para el estado del reproductor
  currentArtist: any = null;
  currentTrackIndex: number = 0;

  // Reproduce la primera canción del artista seleccionado en orden aleatorio
  playArtist(artist: any) {
    this.currentArtist = artist;
    this.currentTrackIndex = Math.floor(Math.random() * artist.tracks.length);
    this.playTrack();
  }

  // Reproduce la canción seleccionada
  playTrack() {
    const track = this.currentArtist.tracks[this.currentTrackIndex];
    const trackUrl = this.currentArtist.folder + track;
    this.audioPlayer.nativeElement.src = trackUrl;
    this.audioPlayer.nativeElement.play();
  }

  // Reproduce la siguiente canción aleatoria cuando la canción actual termina
  onTrackEnd() {
    this.currentTrackIndex = Math.floor(Math.random() * this.currentArtist.tracks.length);
    this.playTrack();
  }
}
