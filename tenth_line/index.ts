// Read from the file file.txt and output the tenth line to stdout.

// sed -n '10p' File.txt
// awk 'NR==10' File.txt
// tail -n+10 File.txt | head -n 1
// grep -n '' File.txt | grep -w '10' | cut -d: -f2
// head -n 10 File.txt | tail -n 1
// awk 'NR==10' File.txt
// awk 'FNR==10' File.txt
// awk 'FNR==10' File.txt
