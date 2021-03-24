#!/bin/bash

echo "[INIT] QR Code generator";

URL='https://editorabaoba.com';
ASSETS_DIR=$PWD/src/assets/audios/*;
OUTPUT_DIR=$PWD/qr-codes/;

for book_dir in $ASSETS_DIR ; do

    BOOK=$(basename $book_dir)

    echo "[BOOK]: $BOOK"

    if [ ! -d "$OUTPUT_dir/$BOOK" ] ; then
        echo "OUTPUT FOLDER DOES NOT EXISTS; CREATING..."
        mkdir $OUTPUT_DIR/$BOOK;
    fi

    echo "QR CODE ENCONDING..."

    for page_dir in $book_dir/* ; do
        MP3_FILE=$(basename $page_dir)
        PAGE=$(echo $MP3_FILE | cut -d . -f1)
        
        qrencode -o "$OUTPUT_DIR/$BOOK/$PAGE.png" $URL/$BOOK/$PAGE
    done

done